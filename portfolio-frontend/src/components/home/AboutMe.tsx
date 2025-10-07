import Link from "next/link";
import SectionTitle from "../shared/SectionTitle";
import { Facebook, Github, LinkedinIcon } from "lucide-react";

const AboutMe = () => {
    return (
        <div id="about" className=" bg-gradient-to-r from-transparent via-transparent to-gray-700 py-12 px-4 md:px-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://i.ibb.co.com/0jgXw2Lk/Fakhruddin-Ahmed-bg-remove-image-8f100d2b8000-1.png"
                        alt="avatar"
                        className="h-[380px] w-[320px] object-cover rounded-xl shadow-2xl border-4 border-pink-500 transform hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-white">
                    {/* Title */}
                    <SectionTitle title1={"About"} title2={"Me"}></SectionTitle>

                    <h3 className="text-2xl font-semibold text-gray-300 my-4">Full Stack Developer!</h3>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-gray-300">
                        Hello! I'm <span className="text-white font-bold">Fakhruddin Ahmed</span>, a passionate and dedicated MERN stack developer. I thrive on transforming ideas into reality through the power of code, crafting seamless, and user-friendly experiences.
                        <br /><br />
                        <span className="text-pink-400">
                            Proficient in JavaScript, React.js, Node.js, Express.js, MongoDB, Firebase, and experienced in utilizing tools like Figma. Well-versed in technologies such as JWT Authentication, HTML, CSS, and adept at working with frameworks including Tailwind and Material UI. Continuously expanding my skill set with various libraries and frameworks to stay at the forefront of web development.
                        </span>
                        <br /><br />
                        I am committed to honing my skills and staying up-to-date with the latest industry trends. Let's collaborate and continue to create amazing digital experiences together.
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