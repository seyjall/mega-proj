import React from 'react';
import appwriteService from "../appwrite/config"
 
import { Link } from 'react-router-dom';

const PostCard = ({$id , title , featuredImage  }) => {
    console.log("PostCard received:", { $id, title, featuredImage });
    return (
        <div className="post-card">
            <Link to = {`/post/${$id}`}>
            <div className='w-full bg-gray-50 rounded-xl p-4'>

                <div className='w-full justify-center mb-4'>
                    <img src = {appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'></img>
                    <h2 className='text-xl font-bold'>{title}</h2>
                </div>

            </div>
            </Link>
        </div>
    );
};

export default PostCard;
