"use client";
import Link from "next/link";
import { useTypewriter } from "use-typewriter-hook";
import CustomButton from "../shared/CustomButton";
import { Download } from "lucide-react";

export default function Hero() {
    const targetText = ['Frontend Developer', 'Backend Developer', 'Fullstack Developer']
    const { textValue: typedText, wrapperClassName } = useTypewriter({
        targetText: targetText,
        typingDelayMillis: 50,
        loopDelay: 500,
        loop: true,
    });
    return (
        <div id="home" className="md:flex bg-transparent lg:py-16 py-8 max-w-7xl mx-auto">
            <div className="flex-1 text-foreground items-start px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold">Hi, There 👋 I am</h3>
                <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold my-3">
                    Fakhruddin Ahmed
                </h1>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                    I am a <span className={`text-[#e643a7] ${wrapperClassName}`}>{typedText}</span>
                </h2>
                <p className="text-base font-semibold">
                    Welcome to my portfolio! I am a passionate and skilled{' '}
                    <span className="text-[#e643a7]">Full-Stack Web Developer</span>.
                    I am always eager to learn new frameworks/technologies to keep myself updated with the latest market trends.
                </p>

                <div className="flex gap-8 mt-4">
                    <Link href="https://drive.google.com/file/d/1o3gSiyPTxpmZ9VEFIAKxWvoLw7a5Eqi0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <CustomButton icon={Download} buttonText="Resume" />
                    </Link>

                    <Link href="#contact">
                        <CustomButton buttonText="Hire Me" />
                    </Link>
                </div>
            </div>

            <div className="flex-1 flex justify-center mt-8 md:mt-0 mb-6 md:mb-0 md:ml-0">
                <div className="rounded-full border-4 border-[#e643a7] shadow-2xl shadow-gray-400">
                    <img
                        src="https://i.ibb.co.com/0jgXw2Lk/Fakhruddin-Ahmed-bg-remove-image-8f100d2b8000-1.png"
                        alt="fakhruddin-ahmed"
                        className="rounded-full w-72 h-72 lg:w-96 lg:h-96 object-cover"
                    />
                </div>
            </div>
        </div>

    );
}
