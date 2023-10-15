import DashboardLayout from '@/components/layout/DashboardLayout';
import React from 'react';

const LearnAndHowToDashboard = () => {
    return (
        <div>
            <h1>This is the dashboard of learn and how to page</h1>
        </div>
    );
};

export default LearnAndHowToDashboard;

LearnAndHowToDashboard.getLayout = function getLayout(page){
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}