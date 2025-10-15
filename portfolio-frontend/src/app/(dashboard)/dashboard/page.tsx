"use client"

import { Facebook, Github, LinkedinIcon, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import UpdateUserModal from "./User/UpdateUserModal";
import UsersTable from "./User/UsersTable";
import Image from "next/image";

const DashboardHomePage = () => {

    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/me`, {
                credentials: "include",
                cache: "no-store"
            });
            const json = await res.json();
            setUser(json);
        };

        fetchData();
        window.addEventListener("userUpdated", fetchData);
        return () => window.removeEventListener("userUpdated", fetchData);
    }, []);
    // console.log("session", user)

    return (
        <div className="flex flex-col items-center w-full">
            <div className="mx-auto bg-white/80 shadow-lg rounded-lg p-6 h-fit w-md my-8">
                <div className="flex items-center space-x-4">
                    <Image
                        src={user?.avatarUrl || "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"}
                        alt="User Avatar"
                        className="w-20 h-20 rounded-full border border-primary"
                        width={80}
                        height={80}
                    />
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            <b>Name: </b>{user?.name || "Unknown User"}
                        </h2>
                        <p className="text-gray-600"><b>Email: </b>{user?.email || "No Email Provided"}</p>
                        <p className="text-gray-600"><b>Role: </b>{user?.Role || "No Role Provided"}</p>
                        <p className="text-gray-600"><b>Address: </b>{user?.location || "No Address Provided"}</p>
                    </div>
                </div>
                <div>
                    {user?.bio &&
                        <p className="text-gray-600 mt-2"><b></b>{user?.bio}</p>
                    }
                    {/* Social Icons */}
                    <div className="flex items-center gap-6 mt-3 text-2xl">
                        {user?.facebook &&
                            <a href={user?.facebook} target="_blank" rel="noopener noreferrer"
                                className="border-2 border-primary p-2 rounded-full text-primary hover:text-white hover:bg-primary/80 transition duration-300">
                                <Facebook />
                            </a>
                        }
                        {user?.linkedin &&
                            <a href={user?.linkedin} target="_blank" rel="noopener noreferrer"
                                className="border-2 border-primary p-2 rounded-full text-primary hover:text-white hover:bg-primary/80 transition duration-300">
                                <LinkedinIcon />
                            </a>
                        }
                        {user?.github &&
                            <a href={user?.github} target="_blank" rel="noopener noreferrer"
                                className="border-2 border-primary p-2 rounded-full text-primary hover:text-white hover:bg-primary/80 transition duration-300">
                                <Github />
                            </a>
                        }
                        {user?.twitter &&
                            <a href={user?.twitter} target="_blank" rel="noopener noreferrer"
                                className="border-2 border-primary p-2 rounded-full text-primary hover:text-white hover:bg-primary/80 transition duration-300">
                                <Twitter />
                            </a>
                        }
                        {/* Update User Modal */}
                        <UpdateUserModal user={user} onUserUpdated={() => setUser({ ...user })} />
                    </div>
                </div>
            </div>
            {/* All Users Table */}
            <UsersTable />
        </div>
    );
};

export default DashboardHomePage;