import Link from "next/link";

const Footer = () => {
    return (
        <footer className="p-8 border-t bg-white/40 dark:bg-black/80 flex flex-col items-center justify-center">
            <aside>
                <p className="text-forground text-lg font-bold text-center">Copyright © {new Date().getFullYear()} || by Fakhruddin - All right reserved.</p>
                <p className="text-foreground text-sm font-semibold mt-2 text-center">If you're admin, please login from here: 
                    <Link href="/login" className="text-primary underline ml-1.5">Admin Login</Link>
                </p>
            </aside>
        </footer>
    );
};

export default Footer;