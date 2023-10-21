import React, { useEffect } from 'react';
import blog from '@/assets/bestTire.webp'
import blogger from "@/assets/BloggerOne.jpg"
import ShowBlog from '../common/ShowBlog';
import Link from 'next/link';
const BestTire = ({allBestTires}) => {
    return (
        <div>
            <div className='mainContainer'>
                <div className='py-[4rem] px-[2rem]'>
                    <h1 className='text-4xl mb-6 capitalize font-semibold tracking-wide'>Our Best Tire</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {allBestTires?.slice(0, 8)?.map((blogItem, index) => <ShowBlog key={index} blogItem={blogItem} />)}
                    </div>
                    <div className='text-center py-8'>
                        <Link href={"/best-tire"}>
                            <buttton className="globalBtn">See all list</buttton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestTire;
