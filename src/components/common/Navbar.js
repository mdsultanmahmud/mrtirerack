import Link from 'next/link';
import React, { useState } from 'react';
import styles from '@/styles/navbar.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im'
import Image from 'next/image';
import logo from '/public/logo.jpg'
const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <div className='shadow-2xl'>
            <div className='mainContainer'>
                <nav className={`hidden lg:flex items-center justify-between ${styles.navContainer} px-[2rem]`}>
                    <ul>
                        <Link href={"/"} className='text-2xl uppercase font-bold'>
                            <Image src={logo} width={100} height={100} alt='logo of the website' />
                        </Link>
                    </ul>
                    <ul className='flex items-center '>
                        <li><Link href={"/tricks"}>Learn & How To</Link></li>
                        {/* <li><Link href={"review"}>Tire Review</Link></li> */}
                        <li><Link href={"/best-tire"}>Best Tires</Link></li>
                        <li><Link href={"/dashboard/learn-how-to"}>Dashboard</Link></li>
                    </ul>
                </nav>
                <nav className={`px-[1rem] lg:hidden relative h-[90px]`}>
                    <ul className='flex items-center justify-between h-full'>
                        <Link href={"/"} className='text-2xl uppercase font-bold'>
                            <Image src={logo} width={100} height={100} alt='logo of the website' />
                        </Link>
                        {
                            !navbar ?
                                <FaBars onClick={() => setNavbar(true)} size={24} className='text-green-500' />
                                :
                                <ImCross onClick={() => setNavbar(false)} size={24} className='text-green-500' />
                        }
                    </ul>
                    <ul className={`z-10 transform duration-300 px-[1rem] ${navbar ? "h-[200px]" : "h-[0px]"} overflow-hidden absolute top-[100%] left-0 bg-white font-semibold text-green-500 text-lg w-full`}>
                        <li className='pt-4'><Link href={"/tricks"}>Learn & How To</Link></li>
                        {/* <li><Link href={"review"}>Tire Review</Link></li> */}
                        <li><Link href={"/best-tire"}>Best Tires</Link></li>
                        <li><Link href={"/dashboard/learn-how-to"}>Dashboard</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;