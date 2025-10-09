"use client"

// import emailjs from '@emailjs/browser'
import { Facebook, Github, Link, LinkedinIcon, LocateIcon, Mail, Phone } from 'lucide-react';
import { useRef } from 'react';
import CustomButton from '../shared/CustomButton';
import { toast } from 'sonner';

const ContactForm = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        toast.success('Message Send Successfully!');

    };
    return (
        <div id="contact" className="max-w-7xl mx-auto my-12 px-8">
            <div className="flex items-center justify-center gap-3 my-12">
                <span className="h-[4px] mt-2 w-10 sm:w-16 md:w-42 bg-primary"></span>
                <span className="text-4xl md:text-5xl font-extrabold">Contact</span>
                <span className="text-4xl md:text-5xl font-extrabold text-primary">Me</span>
                <span className="h-[4px] mt-2 w-10 sm:w-16 md:w-42 bg-primary"></span>
            </div>
            <div className="md:flex my-8 items-center">
                <div className="flex-1 text-white my-8">
                    <div className="flex justify-center items-center gap-4">
                        <h1 className="text-3xl text-primary"><Mail /></h1>
                        <div>
                            <h4 className="text-xl font-bold mb-2">Email:</h4>
                            <p>fakhruddinshovon@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4 mr-20 my-8">
                        <h1 className="text-2xl text-primary"><Phone /></h1>
                        <div>
                            <h4 className="text-xl font-bold mb-2">Phone:</h4>
                            <p>+88 01404346079</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <h1 className="text-3xl text-primary"><LocateIcon /></h1>
                        <div>
                            <h4 className="text-xl font-bold mb-2">Location:</h4>
                            <p>Feni,Chattogram, Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex gap-6 mt-8 text-xl justify-center">
                        <a href="https://www.facebook.com/fakhruddin.shovon.121" target="_blank" rel="noopener noreferrer"
                            className="border-2 border-primary p-2 rounded-full text-primary hover:text-white hover:bg-[#470742] transition duration-300">
                            <Facebook />
                        </a>
                        <a href="https://www.linkedin.com/in/fakhruddin-shovon-3a4b77252" target="_blank" rel="noopener noreferrer"
                            className="border-2 border-primary p-2 rounded-full text-primary hover:text-white hover:bg-[#470742] transition duration-300">
                            <LinkedinIcon />
                        </a>
                        <a href="https://github.com/Shovon96" target="_blank" rel="noopener noreferrer"
                            className="border-2 border-primary p-2 rounded-full text-primary hover:text-white hover:bg-[#470742] transition duration-300">
                            <Github />
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="w-full max-w-lg space-y-6 bg-base-200 p-8 rounded-xl shadow-xl bg-gray-800"
                    >
                        {/* Name Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-base font-semibold mb-1">Name</span>
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-base font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-base font-semibold">Phone Number</span>
                            </label>
                            <input
                                type="tel"
                                name="user_phone"
                                placeholder="Enter your phone number"
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-base font-semibold">Message</span>
                            </label>
                            <textarea
                                name="message"
                                placeholder="Write your message..."
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <CustomButton buttonText="Submit" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactForm;