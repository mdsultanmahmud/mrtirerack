import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import HomeBannerOne from '@/assets/HomeBanner1.jpg'
import HomeBannerTwo from '@/assets/HomeBanner2.jpg'
import { AiOutlineSearch } from 'react-icons/ai'
import tireR from '@/assets/tireReview.jpg'
import Link from 'next/link';
const Banner = () => {
    const banners = [
        {
            id: 1,
            img: HomeBannerOne
        },
        {
            id: 2,
            img: HomeBannerTwo
        },
        {
            id: 2,
            img: tireR
        },
    ]
    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div>
            <div className=''>
                <div>
                    <Slider {...settings}>

                        {
                            banners.map(banner => <div key={banner.id} className='relative'>
                                <Image className='w-[100vw] h-[100vh]' src={banner.img} width={1000} height={1000} alt='image of the banner' />
                                <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] w-[100vw] h-[100vh] grid place-items-center'>
                                    <div className='mainContainer'>
                                        <div className='w-[70%] mx-auto text-center'>
                                            <h1 className='text-white text-[2rem] md:text-[3rem] text-green-500'>When The Rubber Hits The Road</h1>
                                            <p className='text-white text-lg'>We provide guides, tips, tricks, and reviews for some of the best tires on the market that can be had for the absolute best price.</p>
                                            <form >
                                                <div className='flex items-center justify-between p-4 bg-transparent border border-green-500 mt-4'>
                                                    <input type='text' placeholder='What are you looking for?' className='text-white text-lg bg-transparent w-full outline-none' />
                                                    <button type='submit' className='text-white'><AiOutlineSearch size={24} /></button>
                                                </div>
                                            </form>
                                            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                                <Link href={"/review"} className='relative '>
                                                    <Image src={tireR} alt='review image' width={200} height={200} className='h-[200px] w-full' />
                                                    <h2 className='absolute top-0 left-0 grid place-items-center h-full w-full bg-[rgba(0,0,0,0.2)] text-4xl text-white'><span>#Review</span></h2>
                                                </Link>
                                                <Link href={"/best-tire"} className='relative'>
                                                    <Image src={tireR} alt='review image' width={200} height={200} className='h-[200px] w-full' />
                                                    <h2 className='absolute top-0 left-0 grid place-items-center h-full w-full bg-[rgba(0,0,0,0.2)] text-4xl text-white'><span>#List</span></h2>
                                                </Link>
                                                <Link href={"/tricks"} className='relative'>
                                                    <Image src={tireR} alt='review image' width={200} height={200} className='h-[200px] w-full' />
                                                    <h2 className='absolute top-0 left-0 grid place-items-center h-full w-full bg-[rgba(0,0,0,0.2)] text-4xl text-white'><span>#Learn</span></h2>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Banner;