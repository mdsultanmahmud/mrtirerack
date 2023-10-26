import Loader from '@/components/common/Loader';
import RootLayout from '@/components/layout/RootLayout';
import ShowSlugData from '@/components/slug/ShowSlugData';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
const SearchDetailsPage = () => {
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const search = router.query.slug
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/slug?slugurl=${search}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data.data)
                setLoading(false)
            })
            .catch(error => console.log(error));
    }, [search]);

    if(loading) {
        return <Loader/>
    }
    return (
        <div>
            {
                !blog ?
                    <h1 className='mt-12 text-center text-2xl text-red-500'>There is no search result!!</h1>
                    :
                    <ShowSlugData blog={blog} />
            }
        </div>
    );
};

export default SearchDetailsPage;

SearchDetailsPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}