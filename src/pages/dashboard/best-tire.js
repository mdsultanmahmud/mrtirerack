import BlogTable from '@/components/dashboard/BlogTable';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { BsImageFill } from 'react-icons/bs'
const BestTireDashboard = ({ allBestTires }) => {
    const [inputList, setInputList] = useState([{ title: "", details: "", img: "" }])
    const [mainHeading, setMainHeading] = useState('')
    const [shortDetails, setShortDetails] = useState('')
    const [mainImgUrl, setMainImageUrl] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);
    const [subItem, setSubItem] = useState(false)
    const [addItem, setAddItem] = useState(false)
    const handleInputChange = (e, index) => {
        const { name, value } = e.target
        const list = [...inputList]
        list[index][name] = value
        setInputList(list)
    }
    const handleUploadBestTire = async (e) => {
        e.preventDefault()
        const date = new Date(); // Assuming you want to format this specific date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        const bestTire = {
            mainHeading,
            shortDetails,
            mainImgUrl,
            inputList,
            date: formattedDate,
            authorName: "Md. Ashikur Rahman",
            timeIndexing: date.getTime(),
            tireCate: "Best Tire",
            bloggerImg: "https://res.cloudinary.com/dtdlizh8h/image/upload/v1698240106/BloggerOne_s1j2lo.jpg"
        }
        if (!bestTire) {
            return
        }
        fetch("http://localhost:5000/api/v1/best_tire", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bestTire)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("data post successfully!")
                toast.success("Blog is Posted!!")
                setInputList([{ title: "", details: "", img: "" }])
                setMainHeading("")
                setShortDetails("")

            })
            .catch((error) => {
                console.log(error)
                toast.success("Blog is not Posted!!")
            });


    }

    const imgUpload = async (text, index) => {
        if (!selectedImage) {
            return;
        }
        console.log("imag is uploading", selectedImage)
        try {
            const cloudName = 'dtdlizh8h'
            const unsignedUploadPreset = "mrtirerack"
            const formData = new FormData();
            formData.append('file', selectedImage);
            formData.append('upload_preset', unsignedUploadPreset);

            // Make a POST request to Cloudinary's upload endpoint
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const data = await response.json();
                console.log("image url", data.secure_url)
                if (text == "mainImg") {
                    setMainImageUrl(data.secure_url)
                } else if (text == "sub-items") {
                    console.log(`here are the img url is ${data.secure_url}, the index is ${index}}`)
                    console.log(inputList[index])
                    inputList[index].img = data.secure_url
                    console.log(inputList)
                }
            } else {
                console.error('Image upload failed.');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }


    const handleAddItem = async (index) => {
        try {
            const updatedList = [...inputList];
            setInputList([...updatedList, { title: "", details: "", img: null }]);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
        setAddItem(false)
    };

    const handleUpload = async (index) => {
        await imgUpload("sub-items", index)
        setAddItem(true)
    }

    const handleDeleteItem = id => {
        const url = "http://localhost:5000/api/v1/best_tire";
        fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert("Item deleted successfully.");
                } else {
                    alert("Failed to delete item.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }
    return (
        <div>
            <Head>
                <title>Best Tire Upload || MR Tire Rack</title>
                <meta name='Best-Tire-Upload' description="description of this page" />
            </Head>
            <div >
                <h1 className='text-center text-3xl mb-8 font-semibold capitalize'>Upload Your Best Tire</h1>
                <div className=' mx-auto bg-green-800 shadow-2xl rounded-lg p-8'>
                    <form onSubmit={handleUploadBestTire}>
                        <div className='mb-4 flex flex-col gap-y-1'>
                            <label htmlFor='mainHeading' className='text-white text-sm'>Add a Main Heading <span className='text-red-500'>*</span></label>
                            <input value={mainHeading} onChange={(e) => setMainHeading(e.target.value)} name='mainHeading' className=' px-4 py-2 border border-white bg-transparent outline-none text-white rounded-lg' id='mainHeading' type='text' placeholder='add a main heading' required />
                        </div>
                        <div className='mb-4 flex flex-col gap-y-1'>
                            <label htmlFor='shortDetails' className='text-white text-sm'>Add a Short Details <span className='text-red-500'>*</span></label>
                            <textarea value={shortDetails} onChange={(e) => setShortDetails(e.target.value)} name='shortDetails' className='min-h-[300px]  px-4 py-2 border border-white bg-transparent outline-none text-white rounded-lg' id='shortDetails' type='text' placeholder='add a short details' required />
                        </div>
                        <div className='mb-4 flex items-center justify-between'>
                            <div>
                                <label htmlFor='mainImage' className='text-white text-sm flex gap-x-2 items-center  cursor-pointer'><span>Upload an Image</span> <BsImageFill size={22} className='text-white' /></label>
                                <input onChange={e => setSelectedImage(e.target.files[0])} name='mainImage' className='text-white' id='mainImage' type='file' placeholder='upload an image about this' required />
                            </div>
                            {!subItem && <button onClick={() => {
                                setSubItem(true)
                                imgUpload("mainImg")
                            }} className='p-2 bg-black text-white hover:bg-red-500 transition duration-300 lowercase text-sm'>Add Sub-item</button>}
                        </div>

                        {/* upload specific items here  */}
                        <hr />
                        {
                            subItem &&
                            <div className='mt-8'>
                                {
                                    inputList.map((inp, i) => <div key={i}>
                                        <div className='mb-4 flex flex-col gap-y-1'>
                                            <label htmlFor='title' className='text-white text-sm'>Add specific tire Heading <span className='text-red-500'>*</span></label>
                                            <input className='px-4 py-2 border border-white bg-transparent outline-none text-white rounded-lg' id='title' name='title' type='text' placeholder='add a main heading' onChange={(e) => handleInputChange(e, i)} required />
                                        </div>
                                        <div className='mb-4 flex flex-col gap-y-1'>
                                            <label htmlFor='details' className='text-white text-sm'>Add specific Tire Details <span className='text-red-500'>*</span></label>
                                            <textarea className='min-h-[300px] px-4 py-2 border border-white bg-transparent outline-none text-white rounded-lg' id='details' name='details' type='text' placeholder='add a short details' onChange={(e) => handleInputChange(e, i)} required />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor='tireImg' className='text-white text-sm flex gap-x-2 items-center  cursor-pointer'><span>Upload an Image</span> <BsImageFill size={22} className='text-white' /></label>
                                            <input onChange={e => setSelectedImage(e.target.files[0])} className='text-white' name='file' type='file' id='tireImg' placeholder='upload an image about this' required />
                                        </div>
                                        <div>
                                            {
                                                inputList.length - 1 === i && !addItem &&
                                                <span className={`text-white text-sm bg-black px-4 py-2 rounded-lg uppercase mr-2 hover:opacity-80 disabled:opacity-50 cursor-pointer`} onClick={() => handleUpload(i)} disabled={inputList[i].title == "" || inputList[i].details == ""}>Complete</span>
                                            }
                                            {
                                                inputList.length - 1 === i && addItem &&
                                                <span className={`text-white text-sm bg-black px-4 py-2 rounded-lg uppercase mr-2 hover:opacity-80 disabled:opacity-50 cursor-pointer`} onClick={() => handleAddItem(i)}>Add More</span>
                                            }
                                            {/* {
                                            inputList.length !== 1 &&
                                            <button className='text-white text-sm bg-black px-4 py-2 rounded-lg uppercase hover:opacity-80' onClick={() => handleRemoveItem(i)}>Remove Item</button>
                                        } */}
                                        </div>
                                    </div>)
                                }
                            </div>
                        }
                        <button type='submit' className='block mx-auto px-4 py-2 bg-black text-white hover:bg-red-500 transition duration-300 uppercase text-sm mt-5'>Upload Blog</button>
                    </form>
                </div>
            </div>
            <div className='mt-12'>
                <h4 className='font-semibold text-lg mt-8'>Our All Best Tires</h4>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allBestTires?.map((blog) => <tr key={blog?._id}>
                                <th>{blog?.mainHeading}</th>
                                <td>{blog?.tireCate}</td>
                                <td>{blog?.date}</td>
                                <td className='cursor-pointer text-red-500' onClick={() => handleDeleteItem(blog?._id)}>Delete</td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default BestTireDashboard;

BestTireDashboard.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}


export const getStaticProps = async () => {
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
