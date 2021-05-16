import {useEffect, useState} from "react";

export default function ThingDetails(props) {

    let {match: {params: {id}}} = props;

    let [thing, setThing] = useState(null);
    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/inventory/' + id)
            .then(value => value.json())
            .then(value => {
                setThing(value)
            });
    }, [thing]);

    return (
        <div>
            {
                thing && <div>
                    <b>{thing.id}. {thing.title}</b>
                    <br/>
                    Category: {thing.category}
                    <br/>
                    Description: {thing.description}
                    <br/>
                    Slogan: {thing.slogan}
                    <br/>
                    Price: {thing.price}
                    <br/>
                    Stock: {thing.stock}
                </div>
            }
        </div>
    );
}