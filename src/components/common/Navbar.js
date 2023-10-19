import Link from 'next/link';
import React, { useState } from 'react';
import styles from '@/styles/navbar.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
const Navbar = () => {
    const [search, setSearch] = useState(false)
    return (
        <div className='shadow-2xl'>
            <div className='mainContainer'>
                <nav className={`${styles.navContainer} px-[2rem]`}>
                    <ul>
                        <Link href={"/"} className='text-2xl uppercase font-bold'>Icon</Link>
                    </ul>
                    <ul>
                        
                        <li><Link href={"/tricks"}>Learn & How To</Link></li>
                        {/* <li><Link href={"review"}>Tire Review</Link></li> */}
                        <li><Link href={"/best-tire"}>Best Tires</Link></li>
                        {/* <div>
                            <input hidden={!search} autoFocus />
                            {
                                !search ?
                                    <AiOutlineSearch size={28} className='cursor-pointer' onClick={() => setSearch(true)} />
                                    :
                                    <RxCross1 size={24} className='cursor-pointer' onClick={() => setSearch(false)} />
                            }
                        </div> */}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;