import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

const ReviewPage = () => {
    return (
        <div>
            <h1>This is tire review page</h1>
        </div>
    );
};

export default ReviewPage;

ReviewPage.getLayout = function getLayout(page){
    return (
        <RootLayout>{page}</RootLayout>
    )
}