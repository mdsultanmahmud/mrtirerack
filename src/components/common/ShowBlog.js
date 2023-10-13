import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const ShowBlog = ({ blogItem }) => {
    const routes = useRouter()
    const { title, date, comments, blogger, blog, id, tireCate } = blogItem
    return (
        <div className='rounded-lg shadow-xl hover:shadow-2xl transition duration-500 cursor-pointer bg-white' onClick={() => routes.push(`tricks/${id}`)}>
            <div className='relative'>
                <p className='absolute top-3 right-2 bg-green-500 rounded-xl px-4 font-semibold py-1 text-white uppercase text-[0.7rem]'>{tireCate}</p>
                <Image src={blog} height={300} width={200} alt='image of the blog' className='h-[200px] w-full object-cover rounded-t-xl' />
                <Image src={blogger} height={50} width={50} alt='image of the blogger' className={`rounded-full absolute bottom-{50%} transform -translate-y-1/2  ${tireCate == 'Tire Review' ? 'left-[50%] -translate-x-1/2' : "left-8"} w-[60px] h-[60px] object-fit`} />
            </div>
            <div className='py-12 px-8'>
                <h1 className='text-xl font-semibold text-[#60666e] mb-[1rem]'>{title}</h1>
            </div>
            <hr />
            <div className='flex items-center justify-between px-4 py-2'>
                <p className='text-sm text-gray-400'>{date}</p>
                <p className='text-sm text-gray-400'>{comments}</p>
            </div>
        </div>
    );
};

export default ShowBlog;