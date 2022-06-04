import ReactDOM from "react-dom";
import React, { useState } from 'react';

const PostList = () => {
    const [posts, setPosts] = useState(null);
    
    if(posts == null) {
        fetch("/api/post", {
            method:"GET",
            headers: {
              "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            data.posts = data.posts.sort((a,b) => {return b.time - a.time});
            setPosts(data.posts);
        })
        .catch((error) => console.log("error:", error));
        return null;
    }
    
    return (
        <div className="container box">
            <div className="post-list">
                {
                    posts.map((post, postIndex) => {
                        return (
                            <div className="post-item" key={postIndex}>
                                <p className="title">{post.title}</p>
                                <small>{new Date(post.time).toString()}</small>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

if (document.getElementById('post-list')) {
    ReactDOM.render(<PostList />, document.getElementById('post-list'));
}