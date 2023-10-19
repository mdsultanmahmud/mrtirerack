import RootLayout from '@/components/layout/RootLayout';
import React from 'react';
import blog from '@/assets/BlogOne.webp'
import blogger from '@/assets/BloggerOne.jpg'
import Image from 'next/image';
import Link from 'next/link';
const TricksTipsPage = () => {
    const blogItems = [
        {
            id: 1,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            blogImg: blog,
            blogger: "Md. Ashikur Rahman",
            description: `The age-old tire-related question among automotive enthusiasts – Should you go wider? It is a decision that many drivers 
face at least once in their lifetime and one that never has a good answer. Does size really matter? I think it is always 
up to satisfying your needs (pun intended), even when it comes to your vehicle’s tires.

But let’s have a closer look at 225 vs. 245 tires, which are some of the most popular dimensions, width-wise. In this 
‘Tire Tug of War’ article, I will give you all the reasons for and against opting for wider 245 tires if your car has 
225 tires from the factory. So, without further ado, let’s dive into the world of tires and instill some ‘width’ wisdom 
into you.
            `
        },
        {
            id: 2,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            blogImg: blog,
            blogger: "Md. Ashikur Rahman",
            description: `The age-old tire-related question among automotive enthusiasts – Should you go wider? It is a decision that many drivers 
face at least once in their lifetime and one that never has a good answer. Does size really matter? I think it is always 
up to satisfying your needs (pun intended), even when it comes to your vehicle’s tires.

But let’s have a closer look at 225 vs. 245 tires, which are some of the most popular dimensions, width-wise. In this 
‘Tire Tug of War’ article, I will give you all the reasons for and against opting for wider 245 tires if your car has 
225 tires from the factory. So, without further ado, let’s dive into the world of tires and instill some ‘width’ wisdom 
into you.
            `
        },
        {
            id: 3,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            blogImg: blog,
            blogger: "Md. Ashikur Rahman",
            description: `The age-old tire-related question among automotive enthusiasts – Should you go wider? It is a decision that many drivers 
face at least once in their lifetime and one that never has a good answer. Does size really matter? I think it is always 
up to satisfying your needs (pun intended), even when it comes to your vehicle’s tires.

But let’s have a closer look at 225 vs. 245 tires, which are some of the most popular dimensions, width-wise. In this 
‘Tire Tug of War’ article, I will give you all the reasons for and against opting for wider 245 tires if your car has 
225 tires from the factory. So, without further ado, let’s dive into the world of tires and instill some ‘width’ wisdom 
into you.
            `
        },
        {
            id: 4,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            blogImg: blog,
            blogger: "Md. Ashikur Rahman",
            description: `The age-old tire-related question among automotive enthusiasts – Should you go wider? It is a decision that many drivers 
face at least once in their lifetime and one that never has a good answer. Does size really matter? I think it is always 
up to satisfying your needs (pun intended), even when it comes to your vehicle’s tires.

But let’s have a closer look at 225 vs. 245 tires, which are some of the most popular dimensions, width-wise. In this 
‘Tire Tug of War’ article, I will give you all the reasons for and against opting for wider 245 tires if your car has 
225 tires from the factory. So, without further ado, let’s dive into the world of tires and instill some ‘width’ wisdom 
into you.
            `
        },
        {
            id: 5,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            blogImg: blog,
            blogger: "Md. Ashikur Rahman",
            description: `The age-old tire-related question among automotive enthusiasts – Should you go wider? It is a decision that many drivers 
face at least once in their lifetime and one that never has a good answer. Does size really matter? I think it is always 
up to satisfying your needs (pun intended), even when it comes to your vehicle’s tires.

But let’s have a closer look at 225 vs. 245 tires, which are some of the most popular dimensions, width-wise. In this 
‘Tire Tug of War’ article, I will give you all the reasons for and against opting for wider 245 tires if your car has 
225 tires from the factory. So, without further ado, let’s dive into the world of tires and instill some ‘width’ wisdom 
into you.
            `
        },
        {
            id: 6,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            blogImg: blog,
            blogger: "Md. Ashikur Rahman",
            description: `The age-old tire-related question among automotive enthusiasts – Should you go wider? It is a decision that many drivers 
face at least once in their lifetime and one that never has a good answer. Does size really matter? I think it is always 
up to satisfying your needs (pun intended), even when it comes to your vehicle’s tires.

But let’s have a closer look at 225 vs. 245 tires, which are some of the most popular dimensions, width-wise. In this 
‘Tire Tug of War’ article, I will give you all the reasons for and against opting for wider 245 tires if your car has 
225 tires from the factory. So, without further ado, let’s dive into the world of tires and instill some ‘width’ wisdom 
into you.
            `
        },
        {
            id: 7,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            blogImg: blog,
            blogger: "Md. Ashikur Rahman",
            description: `The age-old tire-related question among automotive enthusiasts – Should you go wider? It is a decision that many drivers 
face at least once in their lifetime and one that never has a good answer. Does size really matter? I think it is always 
up to satisfying your needs (pun intended), even when it comes to your vehicle’s tires.

But let’s have a closer look at 225 vs. 245 tires, which are some of the most popular dimensions, width-wise. In this 
‘Tire Tug of War’ article, I will give you all the reasons for and against opting for wider 245 tires if your car has 
225 tires from the factory. So, without further ado, let’s dive into the world of tires and instill some ‘width’ wisdom 
into you.
            `
        },
        {
            id: 8,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            blogImg: blog,
            blogger: "Md. Ashikur Rahman",
            description: `The age-old tire-related question among automotive enthusiasts – Should you go wider? It is a decision that many drivers 
face at least once in their lifetime and one that never has a good answer. Does size really matter? I think it is always 
up to satisfying your needs (pun intended), even when it comes to your vehicle’s tires.

But let’s have a closer look at 225 vs. 245 tires, which are some of the most popular dimensions, width-wise. In this 
‘Tire Tug of War’ article, I will give you all the reasons for and against opting for wider 245 tires if your car has 
225 tires from the factory. So, without further ado, let’s dive into the world of tires and instill some ‘width’ wisdom 
into you.
            `
        },
        {
            id: 9,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            blogImg: blog,
            blogger: "Md. Ashikur Rahman",
            description: `The age-old tire-related question among automotive enthusiasts – Should you go wider? It is a decision that many drivers 
face at least once in their lifetime and one that never has a good answer. Does size really matter? I think it is always 
up to satisfying your needs (pun intended), even when it comes to your vehicle’s tires.

But let’s have a closer look at 225 vs. 245 tires, which are some of the most popular dimensions, width-wise. In this 
‘Tire Tug of War’ article, I will give you all the reasons for and against opting for wider 245 tires if your car has 
225 tires from the factory. So, without further ado, let’s dive into the world of tires and instill some ‘width’ wisdom 
into you.
            `
        },
        {
            id: 10,
            title: "What Does LT Mean on a Tire?",
            date: "September 5, 2023",
            comments: "No Comments",
            tireCate: "Learn & how to",
            bloggerImg: blogger,
            blogImg: blog,
            blogger: "Md. Ashikur Rahman",
            description: `The age-old tire-related question among automotive enthusiasts – Should you go wider? It is a decision that many drivers 
face at least once in their lifetime and one that never has a good answer. Does size really matter? I think it is always 
up to satisfying your needs (pun intended), even when it comes to your vehicle’s tires.

But let’s have a closer look at 225 vs. 245 tires, which are some of the most popular dimensions, width-wise. In this 
‘Tire Tug of War’ article, I will give you all the reasons for and against opting for wider 245 tires if your car has 
225 tires from the factory. So, without further ado, let’s dive into the world of tires and instill some ‘width’ wisdom 
into you.
            `
        },
    ]
    return (
        <div>
            <div className='mainContainer'>
                <div className='px-8'>
                    <h1 className='text-[2rem] md:text-[3rem] my-8 uppercase font-semibold'>Learn & how to</h1>
                    {
                        blogItems.map(blog => <div key={blog.id} className='mb-20'>
                            <h2 className='text-[2rem] font-semibold'>{blog.title}</h2>
                            <p className='mb-4 text-gray-800 text-lg'>{blog.date} by <span className='text-green-500 font-semibold'>{blog.blogger}</span></p>
                            <Image src={blog.blogImg} width={1000} height={500} alt='image of the blog' className="w-[70%] mx-auto my-8 rounded-lg h-[300px] md:h-[500px] object-cover" />
                            <pre className='text-lg text-gray-800'>{blog.description}</pre>
                            <Link href={`/tricks/${blog.id}`}><button className='text-green-500'>Details</button></Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TricksTipsPage;

TricksTipsPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}