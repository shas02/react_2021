import {useEffect, useState} from "react";

export default function CommentDetails(props) {

    let {match: {params:{id}}, location:{state}} = props;
    let [comment, setComment] = useState(null)

    useEffect(() => {
        setComment(state)
    }, [id])

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/comments/' + id)
    //         .then(value => value.json())
    //         .then(value => {
    //             setComment(value)
    //         });
    // }, [id]);

    return (
        <div>
            {
                comment && <h2>{comment.id}. {comment.name}. Email: {comment.email}. Body: {comment.body}. </h2>
            }
        </div>
    );
}