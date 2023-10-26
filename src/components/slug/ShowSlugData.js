import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import ShowBestTireCom from '../common/ShowBestTireCom';
import Comment from '../common/Comment';

const ShowSlugData = ({blog}) => {
    return (
        <div>
            {blog && <ShowBestTireCom blog = {blog}/>}
            {blog && <Comment blog = {blog}/>}
        </div>
    );
};

export default ShowSlugData;

