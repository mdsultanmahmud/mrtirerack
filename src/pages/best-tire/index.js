import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import blog from '@/assets/BlogOne.webp'
import blogger from '@/assets/BloggerOne.webp'
const BestTiresPage = (props) => {
    const {allBestTires} = props
    console.log(allBestTires)
    return (
        <div>
            <div className='mainContainer'>
                <div className='px-8'>
                    <h1 className='text-[2rem] md:text-[3rem] my-8 uppercase font-semibold'>Best Tire</h1>
                    {
                        allBestTires?.map(blog => <div key={blog._id} className='mb-20'>
                            <h2 className='text-[2rem] font-semibold'>{blog.mainHeading}</h2>
                            <p className='mb-4 text-gray-800 text-lg'>{blog.date} by <span className='text-green-500 font-semibold'>{blog.authorName}</span></p>
                            <Image src={blog.mainImgUrl} width={1000} height={500} alt='image of the blog' className="w-[70%] mx-auto my-8 rounded-lg h-[300px] md:h-[500px] object-cover" />
                            <p className='text-lg text-gray-800 text-justify'>{blog.shortDetails}</p>
                            <Link href={`/best-tire/${blog._id}`}><button className='text-green-500 text-xl mt-2'>Details</button></Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BestTiresPage;

BestTiresPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}


// data fetching  
export const getStaticProps = async() => {
    const res = await fetch("http://localhost:5000/api/v1/best_tire")
    const data = await res.json()
    console.log(data)
    return {
        props: {
            allBestTires: data.data 
        },
        revalidate: 10
    }
}
