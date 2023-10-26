import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const ShowBlog = ({ blogItem }) => {
    const router = useRouter()
    const { mainHeading, date, bloggerImg, mainImgUrl, _id, tireCate, authorName } = blogItem
    return (
        <div className='relative rounded-lg shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer bg-white h-[400px]' onClick={() => {
            if(tireCate == "Best Tire"){
                router.push(`/best-tire/${_id}`)
            } else if (tireCate == "Learn & How To"){
                router.push(`/tricks/${_id}`)
            }
        }}>
            <div className='relative'>
                <p className='absolute top-3 right-2 bg-green-500 rounded-xl px-4 font-semibold py-1 text-white uppercase text-[0.7rem]'>{tireCate}</p>
                <Image src={mainImgUrl} height={300} width={200} alt='image of the blog' className='h-[200px] w-full object-cover rounded-t-xl' />
                <Image src={bloggerImg} height={50} width={50} alt='image of the blogger' className={`rounded-full absolute bottom-{50%} transform -translate-y-1/2  ${tireCate == 'Tire Review' ? 'left-[50%] -translate-x-1/2' : "left-8"} w-[60px] h-[60px] object-fit`} />
            </div>
            <div className='mt-8 px-4'>
                <h1 className='text-xl font-semibold text-[#60666e] mb-[1rem]'>{mainHeading?.slice(0,50)}</h1>
            </div>
            <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-full'>
                <hr />
                <div className='flex items-center justify-between px-4 py-2'>
                    <p className='text-sm text-gray-400'>{date}</p>
                    <p className='text-sm text-gray-400'>{authorName?.slice(0,15)}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowBlog;