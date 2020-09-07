import React, { useState, useEffect } from 'react';
import Feed from '../Feed/Feed';
import './NewsFeed.css'

const NewsFeed = () => {
    const [feeds, setFeeds] = useState([])
    
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setFeeds(data))
        
    }, [])
    return (
        <div className="news-feed">
          
               
            <p className="length">Total Posts : {feeds.length}</p>
            {
                feeds.map(feed=> <Feed feed={feed}></Feed>)
            }
            </div>
           
       
    );
};

export default NewsFeed;