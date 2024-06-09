import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../models/ICommentModel";
import {commentApiService} from "../services/comment.api.service";

const CommentsComponent:FC = () => {
    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(()=>{
        commentApiService.getAllComments().then(value =>setComments(value.data))
    },[])
    return (
        <div>
            {
                comments.map(comment=><div key={comment.id}>{comment.id}<br/>{comment.body}<hr/></div>)
            }
        </div>
    );
};

export default CommentsComponent;