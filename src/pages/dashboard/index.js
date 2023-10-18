import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'
import { useRouter } from 'next/router';
const Dashboard = () => {
    const router = useRouter()
    const [emailErr, setEmailErr] = useState("")
    const [passErr, setPassErr] = useState("")
    const handleLogin = (e) => {
        e.preventDefault()
        const target = e.target
        const email = target.email.value
        const password = target.password.value
        if (email === "admin@gmail.com" && password == "admin") {
            router.push("/dashboard/learn-how-to")
        } else {
            if (email != "admin@gmail.com" ) {
                setEmailErr("Email is incorrect!!")
            }else{
                setEmailErr("")
            }
            if (password != "admin") {
                setPassErr("Password is incorrect!!")
            }else{
                setPassErr("")
            }
        }
    }
    return (
        <div className='min-h-screen min-w-screen bg-white grid place-items-center'>
            <div className='bg-[#051647] w-full md:w-[400px] lg:w-[500px] p-12 shadow-2xl rounded-lg text-white'>
                <h2 className='font-bold text-xl mb-8 text-center capitalize text-green-500'>Welcome to Dashboard Login page</h2>
                <form onSubmit={handleLogin}>
                    <div className='mb-4'>
                        <div className='flex items-center border border-green-500 px-2'>
                            <MdEmail size={24} className='text-green-500' />
                            <input required type='email' name='email' className='bg-transparent px-2 py-4 w-full outline-none text-green-500' placeholder='Enter Your Email' />
                        </div>
                        {emailErr !== "" && <p className='text-red-600 text-sm font-semibold mt-1 px-2'>{emailErr}</p>}
                    </div>
                    <div className='mb-4'>
                        <div className='flex items-center border border-green-500 px-2'>
                            <FaLock size={24} className='text-green-500' />
                            <input required type='password' name='password' className='bg-transparent px-2 py-4 w-full outline-none text-green-500' placeholder='Enter Your Password' />
                        </div>
                        {passErr !== "" && <p className='text-red-600 text-sm font-semibold mt-1 px-2'>{passErr}</p>}
                    </div>

                    <button type='submit' className='text-sm bg-green-500 px-4 py-2 uppercase hover:bg-black block mx-auto transition duration-200 mt-8'>Go To Dashboard</button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;