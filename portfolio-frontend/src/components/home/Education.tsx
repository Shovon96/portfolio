import { CheckCircle, GraduationCap } from "lucide-react";

export default function Education() {
    return (
            <div
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')",
                }}
                className="bg-cover bg-center w-full relative"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80"></div>

                <div className="relative max-w-7xl mx-auto py-20 px-6 text-white z-10">
                    <div className="relative flex flex-col space-y-16 before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary before:transform before:-translate-x-1/2">

                        {/* Left Side - Education */}
                        <div className="relative flex flex-col md:flex-row">
                            {/* Icon */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-[calc(50%-24px)] bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10">
                                <GraduationCap className="text-white text-2xl" />
                            </div>

                            {/* Content */}
                            <div className="md:w-1/2 md:pr-12 md:text-right mt-12 md:mt-0">
                                <p className="font-mono italic text-lg font-bold text-primary">
                                    Education
                                </p>
                                <h2 className="text-xl font-bold">Feni Computer Institute</h2>
                                <p className="text-gray-200 mt-2 leading-relaxed">
                                    I am a student at Feni Computers Institute. I have successfully
                                    completed my diploma in Engineering at this institution. My
                                    educational journey has equipped me with valuable skills and
                                    knowledge, providing a strong foundation for my pursuit of
                                    excellence in the field.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Experience */}
                        <div className="relative flex flex-col md:flex-row">
                            {/* Icon */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-[calc(50%-24px)] bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10">
                                <CheckCircle className="text-white text-2xl" />
                            </div>

                            {/* Content */}
                            <div className="md:w-1/2 md:pl-12 md:ml-auto mt-12 md:mt-0">
                                <p className="font-mono italic text-lg font-bold text-primary">
                                    Experience
                                </p>
                                <h2 className="text-xl font-black">Frontend Developer</h2>
                                <p className="text-gray-200 mt-2 leading-relaxed">
                                    I am an enthusiastic full stack developer with one year of professional experience as a <b>Shopify frontend developer </b> at Softvance Agency. I focus on building efficient and user-friendly web applications in modern UI frameworks like React.js, Next.js, Redux, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, Prisma, Firebase and Tailwind CSS and Shadcn UI. Continuously expanding my skill set with various libraries and frameworks to stay at the forefront of web development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
