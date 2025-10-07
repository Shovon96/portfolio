import Link from "next/link";
import SectionTitle from "../shared/SectionTitle";
import { Facebook, Github, LinkedinIcon } from "lucide-react";

const AboutMe = () => {
    return (
        <div id="about" className=" bg-gradient-to-r from-transparent via-transparent to-[#836e9b] py-12 px-4 md:px-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://i.ibb.co.com/0jgXw2Lk/Fakhruddin-Ahmed-bg-remove-image-8f100d2b8000-1.png"
                        alt="avatar"
                        className="h-[480px] w-[420px] object-cover rounded-xl hover:shadow-chart-5 hover:shadow-2xl border-4 border-primary transform hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2">
                    {/* Title */}
                    <SectionTitle title1={"About"} title2={"Me"}></SectionTitle>

                    <h3 className="text-2xl font-semibold text-forground my-4">Full Stack Developer!</h3>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-foreground">
                        Hello! I'm <span className="text-foreground font-bold">Fakhruddin Ahmed</span>, a passionate and dedicated <b>Full stack developer.</b> I thrive on transforming ideas into reality through the power of code, crafting seamless, and user-friendly experiences.
                        <br /><br />
                        <span className="text-muted-foreground font-bold">
                            I have 1 year of professional experience at Softvance Agency as a Shopify Store Designer & Developer, where I worked on designing and developing responsive eCommerce stores. This role helped me strengthen both my technical and design skills.
                        </span>
                        <br /><br />
                        <span>I'm skilled in <b>React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, Prisma, Firebase, Google Cloud, JWT, Tailwind CSS, Shadcn UI, and Figma.</b> Always eager to learn and grow, I stay updated with new technologies to deliver high-quality, impactful web solutions. Let's collaborate and continue to create amazing digital experiences together.</span>
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-6 mt-8 text-2xl">
                        <a href="https://www.facebook.com/fakhruddin.shovon.121" target="_blank" rel="noopener noreferrer"
                            className="border-2 border-pink-500 p-2 rounded-full text-pink-500 hover:text-white hover:bg-pink-500 transition duration-300">
                            <Facebook />
                        </a>
                        <a href="https://www.linkedin.com/in/fakhruddin-shovon-3a4b77252" target="_blank" rel="noopener noreferrer"
                            className="border-2 border-pink-500 p-2 rounded-full text-pink-500 hover:text-white hover:bg-pink-500 transition duration-300">
                            <LinkedinIcon />
                        </a>
                        <a href="https://github.com/Shovon96" target="_blank" rel="noopener noreferrer"
                            className="border-2 border-pink-500 p-2 rounded-full text-pink-500 hover:text-white hover:bg-pink-500 transition duration-300">
                            <Github />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutMe;