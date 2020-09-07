import React from 'react';
import './Comments.css'
const Comments = (props) => {
    return (
        <div className="col-md-7 m-auto text-left comments">
            <p className="text-muted email">From : <span>{props.comment.email}</span></p>
          
            <p className="comment-body">{props.comment.body}.</p>
           
        </div>
    );
};

export default Comments;