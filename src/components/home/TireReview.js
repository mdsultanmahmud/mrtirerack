import React from 'react';
import blog from '@/assets/bestTire.webp'
import blogger from '@/assets/BloggerOne.webp'
import ShowBlog from '../common/ShowBlog';
import Link from 'next/link';
import tireBg from '@/assets/bestTireBg.jpg'
import Image from 'next/image';
import bgImage from '/public/bestTireBg.jpg'
const TireReview = () => {
    const blogItems = [
        {
            id: 1,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            tireCate: "Tire Review",
            comments: "No Comments",
            blogger: blogger,
            blog: blog
        },
        {
            id: 2,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            tireCate: "Tire Review",
            comments: "No Comments",
            blogger: blogger,
            blog: blog
        },
        {
            id: 3,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            tireCate: "Tire Review",
            comments: "No Comments",
            blogger: blogger,
            blog: blog
        },
        {
            id: 4,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            tireCate: "Tire Review",
            comments: "No Comments",
            blogger: blogger,
            blog: blog
        },
        {
            id: 5,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            tireCate: "Tire Review",
            comments: "No Comments",
            blogger: blogger,
            blog: blog
        },
        {
            id: 6,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            tireCate: "Tire Review",
            comments: "No Comments",
            blogger: blogger,
            blog: blog
        },
        {
            id: 7,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            tireCate: "Tire Review",
            comments: "No Comments",
            blogger: blogger,
            blog: blog
        },
        {
            id: 8,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            tireCate: "Tire Review",
            comments: "No Comments",
            blogger: blogger,
            blog: blog
        },
        {
            id: 9,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            tireCate: "Tire Review",
            comments: "No Comments",
            blogger: blogger,
            blog: blog
        },
        {
            id: 10,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            tireCate: "Tire Review",
            comments: "No Comments",
            blogger: blogger,
            blog: blog
        },
    ]
    return (
        <div className='bgImage' style={{backgroundImage:`url(${bgImage})`}}>
            <div className='bg-[rgba(0,0,0,0.6)]'>
                <div className='mainContainer'>
                    <div className={`py-[4rem] px-[2rem]`}>
                        <h1 className='text-4xl mb-6 capitalize font-semibold tracking-wide text-white'>Tire Review</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-transparent'>
                            {blogItems.slice(0, 8).map((blogItem, index) => <ShowBlog key={index} blogItem={blogItem} />)}
                        </div>
                        <div className='text-center py-8 bg-transparent'>
                            <Link href={"/best-tire"}>
                                <buttton className="globalBtn">See all reviews</buttton>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TireReview;