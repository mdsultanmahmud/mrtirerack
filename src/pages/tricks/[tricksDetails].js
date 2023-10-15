import { useRouter } from 'next/router';
import React from 'react';

const BlogDetails = () => {
    const router = useRouter()
    return (
        <div>
            <h1>This is our {router.query.tricksDetails} tricks details post!!</h1>
        </div>
    );
};

export default BlogDetails;