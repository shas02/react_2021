import {useEffect, useState} from "react";
import axiosInstance from '../Sources/Source'
import Post from "./Post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([])
    let [singlePost, setSinglePost] = useState([])
    useEffect(() => {
        axiosInstance.get('/posts').then(value => setPosts([...value.data]))
    })

    const search = (id) => {
        let findedPost = posts.find(value => value.id === id)
        console.log(findedPost);
        setSinglePost(findedPost)
    }

    return (
        <div className={'wrap'}>
            <div className={'users_box'}>
                {posts.map(value => <Post key={value.id} item={value} search={search}/>
                )}
            </div>
            <div className={'single_user_box'}>
                {
                    singlePost && (<h4>{singlePost.body}</h4>)
                }
            </div>
        </div>
    )
}