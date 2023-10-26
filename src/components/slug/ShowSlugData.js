import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import ShowBestTireCom from '../common/ShowBestTireCom';
import Comment from '../common/Comment';
import ShowTricksCom from '../common/ShowTricksCom';

const ShowSlugData = ({blog}) => {
    return (
        <div>
            {blog?.tireCate == "Best Tire" && <ShowBestTireCom blog = {blog}/>}
            {blog?.tireCate == "Learn & How To" && <ShowTricksCom blog = {blog}/>}
            {blog && <Comment blog = {blog}/>}
        </div>
    );
};

export default ShowSlugData;

