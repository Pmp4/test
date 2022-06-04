import ReactDOM from "react-dom";
import React, { useState } from 'react';
import {BottomView} from './BottomView';


const PostList = () => {
    let [posts, setPosts] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [inputTitle, setInputTitle] = useState('');
    const [isBottomView, setIsBottomView] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const myValue = document.getElementById('my-value').value;
    console.log(myValue);

    function addPost(event) {
        posts.push({title:inputTitle});
        setInputTitle('');
    }
    
    return (
        <div className="container box">
            <input type="text" value={inputTitle} onChange={(event) => {setInputTitle(event.target.value)}}/>
            <button onClick={addPost}>기사 추가</button>
            <div className="post-list">
                {
                    posts.map((post, postIndex) => {
                        return (
                            <div className="post-item" key={postIndex}>
                                <p className="title">{post.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={(event) => {
                setClickCount(clickCount+1);
                setIsBottomView(!isBottomView);
            }}>하단 출력</button>
            {
                isBottomView==false?null:<BottomView clickCount={clickCount}><div>hi</div></BottomView>
            }
        </div>
    )
};

if (document.getElementById('post-list')) {
    ReactDOM.render(<PostList />, document.getElementById('post-list'));
}