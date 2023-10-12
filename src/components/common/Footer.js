import Link from 'next/link';
import React from 'react';

import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
const Footer = () => {
    return (
        <div>
            <div className='mainContainer px-4 py-8'>
                <footer className="grid gap-12 grid-cols-1 md:grid-cols-3 text-black">
                    <div>
                        <h1 className="text-black text-xl uppercase font-semibold mb-4">Amazon Associates Program</h1>
                        <p className='text-justify'>Tireer.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. Additionally, Tireer.com participates in various other affiliate programs, and we sometimes get a commission through purchases made through our links.</p>
                    </div>
                    <div>
                        <h1 className="text-black text-xl uppercase font-semibold mb-4">Quick Links</h1>
                        <Link href={"/tricks"} className="block text-lg hover:text-green-500">Learn & How To</Link>
                        <Link href={"/best-tire"} className="block text-lg hover:text-green-500">Tire review</Link>
                        <Link href={"/review"} className="block text-lg hover:text-green-500">Best tires</Link>
                    </div>
                    <div>
                        <h1 className="text-black text-xl uppercase font-semibold mb-4">Social</h1>
                        <div className="flex items-center gap-x-2">
                            <AiOutlineTwitter size={30} className='cursor-pointer hover:text-green-500' />
                            <FaFacebook size={30} className='cursor-pointer hover:text-green-500' />
                            <FaInstagram size={30} className='cursor-pointer hover:text-green-500' />
                        </div>
                    </div>
                </footer>
                <div className='bg-white mt-12'>
                    <h2 className='text-black text-center font-bold text-lg'>&copy;All Right Reserves: Mr. Tire Rack</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;