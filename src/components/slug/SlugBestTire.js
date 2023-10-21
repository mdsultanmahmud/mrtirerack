import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';

const SlugBestTire = ({blog}) => {
    const { mainHeading, shortDetails, mainImgUrl, inputList, date, authorName, _id, comments, tireCate } = blog
    const handleComment = e => {
        e.preventDefault()
        const target = e.target
        const name = target.name.value
        const email = target.email.value
        const message = target.message.value
        const date = new Date(); // Assuming you want to format this specific date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        const comment = {
            name,
            email,
            message,
            blogId: _id,
            time: formattedDate,
            status: false, 
            category: tireCate,
            title: mainHeading
        }
        if (!comment) {
            return
        }
        fetch(`http://localhost:5000/api/v1/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                toast.success("Post a comment successfully!")
                console.log("Post a comment successfully!")
                console.log(data)
                target.name.value = ""
                target.email.value = ""
                target.message.value = ""
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <div>
            <div className="mainContainer px-4">
                <h1 className="text-[1rem] md:text-[2rem]  uppercase font-semibold mt-8">{mainHeading}</h1>
                <p className="text-lg text-gray-700 font-semibold">By <span className="text-green-500">{authorName}</span></p>
                <p className="my-12 text-justify text-lg">{shortDetails}</p>
                {inputList?.map((item, index) => <div className="mb-12" key={index}>
                    <h2 className="text-center text-3xl font-semibold mb-4">{index + 1}. {item.title}</h2>
                    <Image src={item.img} width={500} height={500} alt="img of the tires" className="mx-auto w-full md:w-4/5 rounded-lg h-[300px] md:h-[500px] my-8" />
                    <p className="my-12 text-justify text-lg"><strong>Details: </strong>{item.details}</p>
                </div>)
                }

                <div className="my-12 ">
                    <h3 className="text-2xl mb-4 font-semibold">Leave a comment</h3>
                    <form onSubmit={handleComment}>
                        <input name="name" type="text" className="w-full md:w-1/2 border border-green-500 p-4 outline-none bg-transparent block" placeholder="Enter Your Name" required />
                        <input name="email" type="email" className="w-full md:w-1/2 border border-green-500 p-4 outline-none bg-transparent block my-4" placeholder="Enter Your Gmail" required />
                        <textarea name="message" className="w-full min-h-[200px] md:w-1/2 border border-green-500 p-4 outline-none bg-transparent" placeholder="Your Message..." required />
                        <button className="text-sm lowercase bg-black text-white hover:bg-green-700 block mt-4 px-4 py-2">Post a Comment</button>
                    </form>
                </div>
                {/* <div>
                    <hr />
                    <h4 className="font-semibold text-2xl capitalize mt-12 mb-6">All Comments</h4>
                    {
                        allComments?.filter(comment => comment.status == true)?.map((comment, index) => <div key={index} className="mb-6 p-4">
                            <div className="flex items-center gap-x-4">
                                <h4 className="text-lg text-green-500 capitalize"><strong>Name: </strong> {comment.name}</h4>
                                <h4 className="text-lg text-green-500"><strong>Gmail: </strong> {comment.email}</h4>
                                <h4 className="text-lg"> By <span className="text-green-500"> {comment.time}</span></h4>
                            </div>
                            <p className="text-lg text-justify"><span className="text-xl font-semibold text-green-500">Comment: </span>{comment.message}</p>
                            <hr className="mt-6"/>
                        </div>)
                        
                    }
                </div> */}
            </div>
        </div>
    );
};

export default SlugBestTire;

