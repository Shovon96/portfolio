"use client"

import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { useRef } from 'react';
import CustomButton from '../shared/CustomButton';
import { toast } from 'sonner';
import SectionTitle from '../shared/SectionTitle';
import Link from 'next/link';

const ContactForm = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        toast.success('Message Send Successfully!');
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "fakhruddinshovon@gmail.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            value: "+88 01404346079"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location",
            value: "Feni, Chattogram, Bangladesh"
        }
    ];

    const socialLinks = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/fakhruddin.shovon.121",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/fakhruddin-ahmed-3a4b77252",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: "GitHub",
            url: "https://github.com/Shovon96",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        }
    ];

    return (
        <div id="contact" className="relative py-20 px-4 md:px-16 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <SectionTitle title1={"Contact"} title2={"Me"} />
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info Section */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                Let's <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">Connect</span>
                            </h3>
                            <p className="text-muted-foreground">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative flex items-center gap-4">
                                        <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                                            {info.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-semibold text-muted-foreground mb-1">{info.title}</h4>
                                            <p className="text-foreground">
                                                {info.value}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-primary rounded-full" />
                                Follow Me
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative p-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg text-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:scale-110 transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 text-xs text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                            {social.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl blur-2xl opacity-50" />
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="relative space-y-6 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl shadow-2xl"
                        >
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground">
                                    Name <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Enter your name"
                                    className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground">
                                    Email <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Enter your email"
                                    className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                                    required
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="user_phone"
                                    placeholder="Enter your phone number"
                                    className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground">
                                    Message <span className="text-primary">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="Write your message..."
                                    rows={5}
                                    className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <CustomButton icon={Send} buttonText="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;