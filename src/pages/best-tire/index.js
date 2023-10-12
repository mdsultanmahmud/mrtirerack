import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

const BestTiresPage = () => {
    return (
        <div>
            <h1>This is our best tires page</h1>
        </div>
    );
};

export default BestTiresPage;

BestTiresPage.getLayout = function getLayout(page) {
    return (
      <RootLayout>{page}</RootLayout>
    )
  }