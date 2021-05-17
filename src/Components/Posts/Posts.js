import {useEffect, useReducer, useState} from "react";
import Post from "./Post/Post";
import {Switch, Route} from "react-router-dom";
import PostDetails from "./Post/PostDetails/PostDetails";

function reducer(state, action) {
    switch (action.type) {
        case 'GET_POSTS':
            return {...state, posts: action.payload};
        case 'CHOOSE_POST':
            return {...state, post: action.payload};

        default :
            return {...state};

    }
}

export default function Posts() {

    let [state, dispatch] = useReducer(reducer, {posts: [], post: {}});
    let {posts, post} = state;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                dispatch({type: 'GET_POSTS', payload: value});
            });
    }, []);

    let choosePost = (id) => {
        let find = posts.find(value => value.id == id);
        // setPost(find);
        dispatch({type: 'CHOOSE_POST', payload: find});
    };

    return (
        <div>

            {
                post && <div>{post.body}</div>


            }
            <hr/>
            {
                posts.map(value => {
                    return <div key={value.id}>{value.id} - {value.title}
                        <button onClick={() => choosePost(value.id)}>choose</button>

                    </div>;
                })
            }

        </div>
    );
}