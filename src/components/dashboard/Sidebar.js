import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
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
    return (
        <div className='min-h-screen'>
            <div>
                {
                    sidebarLinks.map((link, index) => <Link key={index} href={link.to}><button className='text-white font-semibold text-lg hover:bg-green-500 transition duration-300 block w-full px-4 py-2 text-left'>{link.text}</button></Link>)
                }
            </div>
        </div>
    );
};

export default Sidebar;