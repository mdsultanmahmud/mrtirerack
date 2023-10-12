import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

const TricksTipsPage = () => {
    return (
        <div>
            <h1>This is our tricks and tips page</h1>
        </div>
    );
};

export default TricksTipsPage;

TricksTipsPage.getLayout = function getLayout(page){
    return (
        <RootLayout>{page}</RootLayout>
    )
}