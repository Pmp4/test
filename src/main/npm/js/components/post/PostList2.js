import ReactDOM from "react-dom";
import React, { useState } from 'react';

const PostList2 = () => {
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

    const postData = null;
    let title = ''
    if(postData == null) { title = '';
    } else {
        title = postData.title;
        
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
            <form  method={postData==null?"post":'put'} action={'/post'+(postData==null?'':('/'+postData.no))}>
                <input name="title" value={title}/>
                <textarea name="content" value={postData==null?'':postData.content}/>
            </form>
        </div>
    )
};

if (document.getElementById('post-list-2')) {
    ReactDOM.render(<PostList2 />, document.getElementById('post-list-2'));
}