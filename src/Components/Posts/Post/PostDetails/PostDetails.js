import {useEffect, useState} from "react";

export default function PostDetails(props) {

    let {match: {params:{id}}} = props;
    let [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => {
                setPost(value)
            });
    }, [post]);

    return (
        <div>
            {
                post && <h2>{post.id}. Title: {post.title}. Body: {post.body}.</h2>
            }
        </div>
    );
}