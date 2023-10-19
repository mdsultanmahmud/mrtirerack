import DashboardLayout from '@/components/layout/DashboardLayout';
import React from 'react';
import toast from 'react-hot-toast';
import { FcApprove } from 'react-icons/fc'
import { AiFillDelete } from 'react-icons/ai'
const UserComment = ({ comments }) => {
    console.log(comments.length)
    const handleApprovvedComment = async (id) => {
        console.log(id)
        const data = {
            status: true
        }
        const response = await fetch(`http://localhost:5000/api/v1/comments/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Data updated successfully');
            toast.success("Comment Approvved!!")
        } else {
            console.error('Failed to update data');
            toast.error("Comment is not Approvved!!")
        }

    }

    const handleDeleteComment = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/v1/comments/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                console.log(`Item with ID ${id} deleted successfully`);
                toast.success("Comment Deleted Successfully!")
            } else {
                console.error(`Failed to delete item with ID ${id}`);
                toast.error("Comment is not Deleted!!")
            }
        } catch (error) {
            console.error('An error occurred while deleting the item:', error);
        }
    }
    const filtered = comments.filter(comment => comment.status == false)
    return (
        <div>
            {
                !filtered.length > 0 ?
                    <h1 className='my-12 font-semibold text-2xl text-center'>There are no Comments!!</h1>
                    :
                    <>
                        <h1 className='my-12 font-semibold text-2xl text-center'>Approved Comments</h1>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Title</th>
                                        <th>Comments</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filtered?.map(comment => <tr key={comment._id}>
                                            <th>{comment?.category}</th>
                                            <td>{comment?.title}</td>
                                            <td>{comment?.message}</td>
                                            <td className='flex items-center gap-x-2'>
                                                <FcApprove size={30} onClick={() => handleApprovvedComment(comment._id)} className='cursor-pointer text-green-500' />
                                                <AiFillDelete size={30} onClick={() => handleDeleteComment(comment._id)} className='cursor-pointer text-red-500' />

                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>

            }

        </div>
    );
};

export default UserComment;

UserComment.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/api/v1/comments")
    const data = await res.json()
    console.log(data)
    return ({
        props: {
            comments: data.data
        },
        revalidate: 10
    })
}