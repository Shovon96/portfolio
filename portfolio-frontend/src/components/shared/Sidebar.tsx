"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle, LogOut, User, BookCheck, SearchCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Sidebar() {

    const [session, setSession] = useState<any>(null);
    const pathname = usePathname();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/me`, {
                credentials: "include",
                cache: "no-store"
            });
            const json = await res.json();
            setSession(json);
        };

        fetchData();
        window.addEventListener("userUpdated", fetchData);
        return () => window.removeEventListener("userUpdated", fetchData);
    }, []);
    // console.log("session", session)

    const logout = async () => {
        await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/logout`, {
            method: "POST",
            credentials: "include",
            cache: "no-store"
        });
        window.dispatchEvent(new Event("userUpdated"));
    };

    const dashboardLinks = [
        { href: "/", label: "Home", icon: <Home /> },
        { href: "/dashboard", label: "Manage Profile", icon: <User /> },
        { href: "/dashboard/manage-blog", label: "Manage Blog", icon: <BookCheck /> },
        { href: "/dashboard/manage-project", label: "Manage Project", icon: <PlusCircle /> },
        { href: "/dashboard/manage-skill", label: "Manage Skill", icon: <SearchCheck /> },
    ];

    return (
        <aside className="flex min-h-screen w-64 flex-col border-r bg-black text-white">
            <div className="flex justify-start items-center gap-4 py-3 px-4 border-b">
                <Image
                    height={32}
                    width={32}
                    src={session?.avatarUrl || "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"}
                    alt="User Avatar"
                    className="rounded-full border"
                />
                <p className="font-bold text-lg">{session?.name}</p>
            </div>
            {/* Top navigation */}
            <nav className="flex-1 space-y-2 p-4">
                {dashboardLinks?.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition ${isActive
                                ? "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-zinc-800 hover:bg-gray-100 hover:text-black"
                                : "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
                                }`}
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom action */}
            <div className="p-4 border-t border-gray-500">
                <Button
                    className="w-full justify-start gap-2 cursor-pointer text-white bg-primary hover:bg-primary/70"
                    onClick={logout}
                >
                    <LogOut className="h-4 w-4" />
                    Logout
                </Button>
            </div>
        </aside>
    );
}