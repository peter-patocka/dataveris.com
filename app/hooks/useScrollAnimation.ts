'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Custom hook for scroll-triggered animations using Intersection Observer API
 * Returns a ref to attach to the element and a boolean indicating if it's visible
 */
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(options: UseScrollAnimationOptions = {}) {
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
    const elementRef = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Check for prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (triggerOnce) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!triggerOnce) {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { ref: elementRef, isVisible };
}

/**
 * Custom hook for initial page load animations (no scroll required)
 * Triggers animation on mount with a delay
 */
export function useInitialAnimation(delay: number = 0) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check for prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return isVisible;
}

/**
 * Custom hook for pulsing animation that creates a fade-out/fade-in effect
 * The image fades out (300ms), then fades back in (300ms), then waits until the next pulse
 * @param interval - Time in milliseconds between pulse animations (default: 10000ms)
 */
export function usePulsingAnimation(interval: number = 10000) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check for prefers-reduced-motion (SSR-safe)
        if (typeof window === 'undefined') return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const FADE_DURATION = 600; // Must match CSS transition duration
        const timeoutIds: NodeJS.Timeout[] = [];

        const pulseTimer = setInterval(() => {
            // Fade out
            setIsVisible(false);

            // Fade back in after fade-out completes
            const fadeInTimeout = setTimeout(() => {
                setIsVisible(true);
            }, FADE_DURATION);

            timeoutIds.push(fadeInTimeout);
        }, interval);

        return () => {
            clearInterval(pulseTimer);
            timeoutIds.forEach((id) => clearTimeout(id));
        };
    }, [interval]);

    return isVisible;
}
