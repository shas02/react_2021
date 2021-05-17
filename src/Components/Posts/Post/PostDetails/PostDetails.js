import {useEffect, useState} from "react";

export default function PostDetails(props) {

    let {match: {params:{id}}, location:{state}} = props;
    let [post, setPost] = useState(null);

    useEffect(() => {
        setPost(state)
    }, [id])

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(value => value.json())
    //         .then(value => {
    //             setPost(value)
    //         });
    // }, [id]);

    return (
        <div>
            {
                post && <h2>{post.id}. Title: {post.title}. Body: {post.body}.</h2>
            }
        </div>
    );
}