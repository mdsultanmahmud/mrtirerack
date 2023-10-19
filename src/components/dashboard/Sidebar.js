import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Sidebar = () => {
    const router = useRouter()
    const sidebarLinks = [
        {
            to: '/dashboard/learn-how-to',
            text: "Learn & How To"
        },
        {
            to: '/dashboard/best-tire',
            text: "Best Tire"
        },
        {
            to: '/dashboard/user-comments',
            text: "Approved Comment"
        },
    ]

    const handleLogout = () =>{
        Cookies.remove("loggedIn")
        router.push("http://localhost:3000/dashboard")
    }
    return (
        <div>
            <div>
                {
                    sidebarLinks.map((link, index) => <Link key={index} href={link.to}><button className='text-white font-semibold text-lg hover:bg-green-500 transition duration-300 block w-full px-4 py-2 text-left'>{link.text}</button></Link>)
                }
                <button onClick={handleLogout} className='text-white font-semibold text-lg hover:bg-green-500 transition duration-300 block w-full px-4 py-2 text-left'>Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;