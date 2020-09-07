import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FeedDetails.css'
import Comments from '../Comments/Comments'

const FeedDetails = () => {
  
    const {id} = useParams();
    // Fetching Posts API
  const [post,setPost] = useState([]);
  useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setPost(data))
     
  }, [])
 
  // Fetching Comment API
  const [comments,setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json())
    .then(data =>setComments(data))
  }, [])

    return (
        <div className="full-details">
           <h4>Post Details</h4>
            <div className="col-md-5 col-lg-5 m-auto post-css">
               
                <p className="post-title"><strong>{post.title}.</strong> <span className="text-muted">(title)</span></p>
                <p>{post.body}.</p>
              </div>
            
          <div className="img">
            <img src="" alt=""/>
          </div>
         
         <div className="container ">
          <div className="col-md-7">
          <h5 className="comment-tag">Comments</h5>
          </div>

          {
           comments.map(comment => <Comments key={comment.id} comment={comment}></Comments>) 
          }
         
         </div>
         
         
        </div>
    );
};

export default FeedDetails;





