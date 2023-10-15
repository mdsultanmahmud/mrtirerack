import DashboardLayout from '@/components/layout/DashboardLayout';
import React from 'react';

const BestTireDashboard = () => {
    return (
        <div>
            <h1>This is our best tire dashboard page</h1>
        </div>
    );
};

export default BestTireDashboard;

BestTireDashboard.getLayout = function getLayout(page){
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}