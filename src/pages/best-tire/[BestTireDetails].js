import { useRouter } from 'next/router';
import React from 'react';

const BestTireDetails = () => {
    const router = useRouter()
    return (
        <div>
            <h1>This is our {router.query.BestTireDetails} no best tire details page!!</h1>
        </div>
    );
};

export default BestTireDetails;