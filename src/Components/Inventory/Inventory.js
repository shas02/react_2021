import {useEffect, useState} from "react";
import Thing from "./Thing/Thing";

export default function Inventory(props) {

    let {match: {url}} = props;

    let [inventory, setInventory] = useState([]);
    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/inventory')
            .then(value => value.json())
            .then(value => {
                setInventory([...value])
            });
    }, [])

    return (
        <div>
            {
                inventory.map(value => <Thing key={value.id} item={value} url={url}/>)
            }
        </div>
    );
}