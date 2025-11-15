'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useContext, useRef, useState } from 'react';
import Link from 'next/link';

import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Divider } from 'primereact/divider';
import { NodeRef } from '@/types';
import { classNames } from 'primereact/utils';

const Dashboard = () => {
    const [isHidden, setIsHidden] = useState(false);
    const menuRef = useRef<HTMLElement | null>(null);
    const isPricingSectionEnabled = false;

    const toggleMenuItemClick = () => {
        setIsHidden((prevState) => !prevState);
    };

    const sendMail = () => {
        const subject = encodeURIComponent('New business opportunity');
        window.location.href = `mailto:contact@dataveris.com?subject=${subject}`;
    };

    return (
        <div className="surface-0 flex justify-content-center">
            <div id="home" className="landing-wrapper overflow-hidden">
                <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static">
                    <Link href="/" className="flex align-items-center">
                        <img src={`/layout/images/logo-dark.jpg`} alt="Sakai Logo" height="50" className="mr-0 lg:mr-2" />
                        <span className="text-900 font-medium text-2xl line-height-3 mr-8">
                            <span style={{ color: 'rgb(39, 133, 216)' }}>D</span>ata<span style={{ color: 'rgb(6, 31, 67)' }}>v</span>eris
                        </span>
                    </Link>
                    <StyleClass nodeRef={menuRef as NodeRef} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <i ref={menuRef} className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"></i>
                    </StyleClass>
                    <div className={classNames('align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2', { hidden: isHidden })} style={{ top: '100%' }}>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
                            <li>
                                <a href="#home" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Home</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>About</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a href="#services" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Services</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a href="#our-mission" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                    <span>Industries</span>
                                    <Ripple />
                                </a>
                            </li>
                            {isPricingSectionEnabled && (
                                <li>
                                    <a href="#pricing" onClick={toggleMenuItemClick} className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3">
                                        <span>Pricing</span>
                                        <Ripple />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div
                    id="hero"
                    className="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                    style={{
                        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)',
                        clipPath: 'ellipse(150% 87% at 93% 13%)'
                    }}
                >
                    <div className="mx-4 md:mx-8 mt-0 md:mt-4">
                        <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                            <span className="font-light block">Secure Software</span> Compliant by Design
                        </h1>
                        <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Custom-built software and consulting services that meet your industry&#39;s strictest regulatory standards—HIPAA, SOC 2, PCI-DSS, and more... </p>
                        <Button type="button" label="Get a Free Consultation" rounded className="text-xl border-none mt-3 bg-blue-500 font-normal line-height-3 px-3 text-white mb-4" onClick={sendMail}></Button>
                    </div>
                    <div className="flex justify-content-center md:justify-content-end">
                        <img src="/demo/images/landing/screen-1.png" alt="Hero Image" className="w-9 md:w-auto" />
                    </div>
                </div>

                <div id="about" className="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
                    <div className="grid justify-content-center">
                        <div
                            className="col-12 mt-8 mb-8 p-2 md:p-8"
                            style={{
                                borderRadius: '20px',
                                background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)'
                            }}
                        >
                            <div className="flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0">
                                <h3 className="text-gray-900 mb-2">About Dataveris</h3>
                                <span className="text-gray-600 text-2xl">Who We Are</span>
                                <p className="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4" style={{ maxWidth: '800px' }}>
                                    Dataveris is a U.S.-based software development and compliance consulting firm specializing in delivering secure, scalable, and regulation-ready digital solutions.
                                </p>
                                <p className="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4" style={{ maxWidth: '800px' }}>
                                    We combine deep technical expertise with a rigorous understanding of global security standards—so your product not only performs, it passes audits.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 text-center mt-8 mb-4" id="services">
                            <h2 className="text-900 font-normal mb-2">Services</h2>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '190px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-yellow-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        <i className="pi pi-fw pi-code text-2xl text-yellow-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Custom Software Development</h5>
                                    <span className="text-600">Compliance-focused SaaS applications</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '190px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-cyan-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        <i className="pi pi-fw pi-cloud text-2xl text-cyan-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Enterprise and cloud-native solutions</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '190px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-indigo-200"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        <i className="pi pi-fw pi-refresh text-2xl text-indigo-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Full SDLC with audit-friendly documentation</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '190px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-bluegray-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        <i className="pi pi-fw pi-check-square text-2xl text-bluegray-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Compliance Consulting</h5>
                                    <span className="text-600">HIPAA, SOC 2, PCI-DSS, ISO 27001 readiness</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '190px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-orange-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        <i className="pi pi-fw pi-shield text-2xl text-orange-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Security architecture reviews</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '190px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-pink-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        <i className="pi pi-fw pi-users text-2xl text-pink-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Internal training for developers and ops teams</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '190px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-teal-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        <i className="pi pi-fw pi-server text-2xl text-teal-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">DevSecOps Enablement</h5>
                                    <span className="text-600">Secure CI/CD pipelines</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '190px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-blue-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        <i className="pi pi-fw pi-key text-2xl text-blue-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Secrets management and zero-trust access</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
                            <div
                                style={{
                                    height: '190px',
                                    padding: '2px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))'
                                }}
                            >
                                <div className="p-3 surface-card h-full" style={{ borderRadius: '8px' }}>
                                    <div
                                        className="flex align-items-center justify-content-center bg-purple-200 mb-3"
                                        style={{
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        <i className="pi pi-fw pi-eye text-2xl text-purple-700"></i>
                                    </div>
                                    <h5 className="mb-2 text-900">Infrastructure as Code with compliance baked in</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="our-mission" className="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
                    <div className="text-center">
                        <h2 className="text-900 font-normal mb-2">Industries we serve</h2>
                    </div>

                    <div className="grid mt-8 pb-2 md:pb-8">
                        <div className="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0" style={{ borderRadius: '8px' }}>
                            <img src="/demo/images/landing/doctor-and-patients.svg" className="w-11 mt-4 mb-4" alt="Healthcare" />
                        </div>

                        <div className="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
                            <div
                                className="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end"
                                style={{
                                    width: '4.2rem',
                                    height: '4.2rem',
                                    borderRadius: '10px'
                                }}
                            >
                                <i className="pi pi-fw pi-heart text-5xl text-purple-700"></i>
                            </div>
                            <h2 className="line-height-1 text-900 text-4xl font-normal">Healthcare</h2>
                            <span className="text-700 text-2xl line-height-3 ml-0 md:ml-2" style={{ maxWidth: '650px' }}>
                                HIPAA, HITECH
                            </span>
                        </div>
                    </div>

                    <div className="grid my-8 pt-2 md:pt-8">
                        <div className="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                            <div
                                className="flex align-items-center justify-content-center bg-yellow-200 align-self-center lg:align-self-start"
                                style={{
                                    width: '4.2rem',
                                    height: '4.2rem',
                                    borderRadius: '10px'
                                }}
                            >
                                <i className="pi pi-fw pi-dollar text-5xl text-yellow-700"></i>
                            </div>
                            <h2 className="line-height-1 text-900 text-4xl font-normal">Finance &amp; Fintech</h2>
                            <span className="text-700 text-2xl line-height-3 mr-0 md:mr-2" style={{ maxWidth: '650px' }}>
                                SOC 2, PCI-DSS
                            </span>
                        </div>

                        <div className="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0" style={{ borderRadius: '8px' }}>
                            <img src="/demo/images/landing/bank.svg" className="w-11 m-auto" alt="Finance and Fintech" />
                        </div>
                    </div>

                    <div className="grid mt-8 pb-2 md:pb-8">
                        <div className="flex justify-content-center col-12 lg:col-6 bg-blue-100 p-0 flex-order-1 lg:flex-order-0" style={{ borderRadius: '8px' }}>
                            <img src="/demo/images/landing/shop.svg" className="w-11 mt-4 mb-4" alt="eCommerce and SaaS" />
                        </div>

                        <div className="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
                            <div
                                className="flex align-items-center justify-content-center bg-blue-200 align-self-center lg:align-self-end"
                                style={{
                                    width: '4.2rem',
                                    height: '4.2rem',
                                    borderRadius: '10px'
                                }}
                            >
                                <i className="pi pi-fw pi-shopping-cart text-5xl text-blue-700"></i>
                            </div>
                            <h2 className="line-height-1 text-900 text-4xl font-normal">eCommerce & SaaS</h2>
                            <span className="text-700 text-2xl line-height-3 ml-0 md:ml-2" style={{ maxWidth: '650px' }}>
                                GDPR, CCPA
                            </span>
                        </div>
                    </div>

                    <div className="grid my-8 pt-2 md:pt-8">
                        <div className="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                            <div
                                className="flex align-items-center justify-content-center bg-green-100 align-self-center lg:align-self-start"
                                style={{
                                    width: '4.2rem',
                                    height: '4.2rem',
                                    borderRadius: '10px'
                                }}
                            >
                                <i className="pi pi-fw pi-flag text-5xl text-green-800"></i>
                            </div>
                            <h2 className="line-height-1 text-900 text-4xl font-normal">Government & Public Sector</h2>
                            <span className="text-700 text-2xl line-height-3 mr-0 md:mr-2" style={{ maxWidth: '650px' }}>
                                FedRAMP, NIST 800-53
                            </span>
                        </div>

                        <div className="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-green-100 p-0" style={{ borderRadius: '8px' }}>
                            <img src="/demo/images/landing/government.svg" className="w-11 m-auto mt-4 mb-4" alt="Government" />
                        </div>
                    </div>
                </div>

                {isPricingSectionEnabled ?? (
                    <div id="pricing" className="py-4 px-4 lg:px-8 my-2 md:my-4">
                        <div className="text-center">
                            <h2 className="text-900 font-normal mb-2">Matchless Pricing</h2>
                        </div>

                        <div className="grid justify-content-between mt-8 md:mt-0">
                            <div className="col-12 lg:col-4 p-0 md:p-3">
                                <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                                    <h3 className="text-900 text-center my-5">Free</h3>
                                    <img src="/demo/images/landing/free.svg" className="w-10 h-10 mx-auto" alt="free" />
                                    <div className="my-5 text-center">
                                        <span className="text-5xl font-bold mr-2 text-900">$0</span>
                                        <span className="text-600">per month</span>
                                        <Button label="Get Started" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                                    </div>
                                    <Divider className="w-full bg-surface-200"></Divider>
                                    <ul className="my-5 list-none p-0 flex text-900 flex-column">
                                        <li className="py-2">
                                            <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                            <span className="text-xl line-height-3">Responsive Layout</span>
                                        </li>
                                        <li className="py-2">
                                            <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                            <span className="text-xl line-height-3">Unlimited Push Messages</span>
                                        </li>
                                        <li className="py-2">
                                            <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                            <span className="text-xl line-height-3">50 Support Ticket</span>
                                        </li>
                                        <li className="py-2">
                                            <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                            <span className="text-xl line-height-3">Free Shipping</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                                <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                                    <h3 className="text-900 text-center my-5">Startup</h3>
                                    <img src="/demo/images/landing/startup.svg" className="w-10 h-10 mx-auto" alt="startup" />
                                    <div className="my-5 text-center">
                                        <span className="text-5xl font-bold mr-2 text-900">$1</span>
                                        <span className="text-600">per month</span>
                                        <Button label="Try Free" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                                    </div>
                                    <Divider className="w-full bg-surface-200"></Divider>
                                    <ul className="my-5 list-none p-0 flex text-900 flex-column">
                                        <li className="py-2">
                                            <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                            <span className="text-xl line-height-3">Responsive Layout</span>
                                        </li>
                                        <li className="py-2">
                                            <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                            <span className="text-xl line-height-3">Unlimited Push Messages</span>
                                        </li>
                                        <li className="py-2">
                                            <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                            <span className="text-xl line-height-3">50 Support Ticket</span>
                                        </li>
                                        <li className="py-2">
                                            <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                            <span className="text-xl line-height-3">Free Shipping</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                                <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                                    <h3 className="text-900 text-center my-5">Enterprise</h3>
                                    <img src="/demo/images/landing/enterprise.svg" className="w-10 h-10 mx-auto" alt="enterprise" />
                                    <div className="my-5 text-center">
                                        <span className="text-5xl font-bold mr-2 text-900">$999</span>
                                        <span className="text-600">per month</span>
                                        <Button label="Get a Quote" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                                    </div>
                                    <Divider className="w-full bg-surface-200"></Divider>
                                    <ul className="my-5 list-none p-0 flex text-900 flex-column">
                                        <li className="py-2">
                                            <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                            <span className="text-xl line-height-3">Responsive Layout</span>
                                        </li>
                                        <li className="py-2">
                                            <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                            <span className="text-xl line-height-3">Unlimited Push Messages</span>
                                        </li>
                                        <li className="py-2">
                                            <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                            <span className="text-xl line-height-3">50 Support Ticket</span>
                                        </li>
                                        <li className="py-2">
                                            <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                            <span className="text-xl line-height-3">Free Shipping</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
                    <div className="grid justify-content-between">
                        <div className="col-12 md:col-2" style={{ marginTop: '-1.5rem' }}>
                            <Link href="/" className="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                                <img src={`/layout/images/logo-dark.jpg`} alt="footer sections" width="50" height="50" className="mr-2" />
                                <span className="font-medium text-3xl text-900">Dataveris</span>
                            </Link>
                        </div>

                        <div className="col-12 md:col-10 lg:col-7">
                            <div className="grid text-center md:text-left">
                                <div className="col-12 md:col-4">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Address</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700" href="https://maps.app.goo.gl/jgBY7cbuNZxQBf2N7" target="_blank">
                                        5900 Balcones Drive #20540
                                    </a>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700" href="https://maps.app.goo.gl/jgBY7cbuNZxQBf2N7" target="_blank">
                                        Austin, TX 78731
                                    </a>
                                </div>

                                <div className="col-12 md:col-4 mt-4 md:mt-0">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">How Can We Help?</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700" href="mailto:contact@dataveris.com">
                                        contact@dataveris.com
                                    </a>
                                </div>

                                <div className="col-12 md:col-4 mt-4 md:mt-0">
                                    <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Call Us</h4>
                                    <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700" href="tel:+13466801990">
                                        (346) 680-1990
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
