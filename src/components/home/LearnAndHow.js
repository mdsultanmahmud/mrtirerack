import React from 'react';
import blog from '@/assets/BlogOne.webp'
import blogger from "@/assets/BloggerOne.jpg"
import ShowBlog from '../common/ShowBlog';
import Link from 'next/link';
const LearnAndHow = () => {
    const blogItems = [
        {
            id: 1,
            mainHeading: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            authorName: "Md. Ashikur Rahman",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            mainImgUrl: blog
        },
        {
            id: 2,
            mainHeading: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            authorName: "Md. Ashikur Rahman",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            mainImgUrl: blog
        },
        {
            id: 3,
            mainHeading: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            authorName: "Md. Ashikur Rahman",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            mainImgUrl: blog
        },
        {
            id: 4,
            mainHeading: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            authorName: "Md. Ashikur Rahman",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            mainImgUrl: blog
        },
        {
            id: 5,
            mainHeading: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            authorName: "Md. Ashikur Rahman",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            mainImgUrl: blog
        },
        {
            id: 6,
            mainHeading: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            authorName: "Md. Ashikur Rahman",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            mainImgUrl: blog
        },
        {
            id: 7,
            mainHeading: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            authorName: "Md. Ashikur Rahman",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            mainImgUrl: blog
        },
        {
            id: 8,
            mainHeading: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            authorName: "Md. Ashikur Rahman",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            mainImgUrl: blog
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