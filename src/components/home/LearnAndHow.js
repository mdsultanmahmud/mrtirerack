import React from 'react';
import blog from '@/assets/BlogOne.webp'
import blogger from "@/assets/BloggerOne.jpg"
import ShowBlog from '../common/ShowBlog';
import Link from 'next/link';
const LearnAndHow = () => {
    const blogItems = [
        {
            id: 1,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            blogger: blogger,
            blog: blog
        },
        {
            id: 2,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            blogger: blogger,
            blog: blog
        },
        {
            id: 3,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            blogger: blogger,
            blog: blog
        },
        {
            id: 4,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            blogger: blogger,
            blog: blog
        },
        {
            id: 5,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            blogger: blogger,
            blog: blog
        },
        {
            id: 6,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            blogger: blogger,
            blog: blog
        },
        {
            id: 7,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            blogger: blogger,
            blog: blog
        },
        {
            id: 8,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            blogger: blogger,
            blog: blog
        },
        {
            id: 9,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            blogger: blogger,
            blog: blog
        },
        {
            id: 10,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            blogger: blogger,
            blog: blog
        },
    ]
    return (
        <div>
            <div className='mainContainer'>
                <div className={`py-[4rem] px-[2rem]`}>
                    <h1 className='text-4xl mb-6 capitalize font-semibold tracking-wide'>Learn & How To</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {blogItems.slice(0, 8).map((blogItem, index) => <ShowBlog key={index} blogItem={blogItem} />)}
                    </div>
                    <div className='text-center py-8'>
                        <Link href={"/tricks"}>
                            <buttton className="globalBtn">See all tips & tricks</buttton>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnAndHow;