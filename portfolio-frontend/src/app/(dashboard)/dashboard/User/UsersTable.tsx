"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

interface User {
    _id: string;
    name: string;
    email: string;
    Role: string;
}

const UsersTable = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // 🧠 Fetch all users
    const fetchUsers = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users`, {
                credentials: "include",
                cache: "no-store",
            });
            const data = await res.json();
            setUsers(data);
        } catch (error: any) {
            toast.error("Failed to fetch users:", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // 🧹 Delete user handler
    const handleDelete = async (id: string) => {
        const confirmDelete = confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/${id}`, {
                method: "DELETE",
                credentials: "include",
            });

            if (res.ok) {
                setUsers(users.filter((user) => user._id !== id));
                toast.success("User deleted successfully");
            } else {
                toast.error("Failed to delete user");
            }
        } catch (error: any) {
            toast.error("Error deleting user:", error.message);
        }
    };

    if (loading) {
        return <p className="text-center text-gray-500 mt-10">Loading users...</p>;
    }

    return (
        <div className="overflow-x-auto bg-white/90 dark:bg-zinc-900 shadow-lg rounded-lg mt-8">
            <table className="min-w-full border border-gray-200 dark:border-zinc-800">
                <thead className="bg-gray-100 dark:bg-zinc-800">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Email
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Role
                        </th>
                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users?.length > 0 ? (
                        users.map((user, idx) => (
                            <tr
                                key={user._id}
                                className={`${idx % 2 === 0 ? "bg-gray-50 dark:bg-zinc-800/50" : "bg-white dark:bg-zinc-900"
                                    } hover:bg-gray-100 dark:hover:bg-zinc-800 transition`}
                            >
                                <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                                    {user.Role}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="text-red-500 hover:text-white hover:bg-red-500 p-2 rounded-md transition"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={4}
                                className="text-center py-6 text-gray-500 dark:text-gray-400"
                            >
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
