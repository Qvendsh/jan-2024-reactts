import React, {FC, useEffect, useState} from 'react';
import {IPostmodel} from "../models/IPostmodel";
import {postApiService} from "../services/post.api.service";

const PostsComponent:FC = () => {
    const [posts, setPosts] = useState<IPostmodel[]>([]);
    useEffect(()=>{
       postApiService.getAllPosts().then(value => setPosts(value.data))
    },[])

    return (
        <div>
            {
                posts.map(post=><div key={post.id}>{post.title}<hr/></div>)
            }
        </div>
    );
};

export default PostsComponent;