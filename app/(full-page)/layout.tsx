import { Metadata } from 'next';
import AppConfig from '../../layout/AppConfig';
import React from 'react';

interface SimpleLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Dataveris | Secure Software & Compliant by Design',
    description: 'Dataveris is a U.S.-based software development and compliance consulting firm specializing in delivering secure, scalable, and regulation-ready digital solutions.'
};

export default function SimpleLayout({ children }: SimpleLayoutProps) {
    return <React.Fragment>{children}</React.Fragment>;
}
