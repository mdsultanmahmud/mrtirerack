import DashboardLayout from '@/components/layout/DashboardLayout';
import React from 'react';

const UserComment = () => {
    return (
        <div>
            <h1>Here our user comment approved page</h1>
        </div>
    );
};

export default UserComment;

UserComment.getLayout = function getLayout(page){
    return(
        <DashboardLayout>{page}</DashboardLayout>
    )
}