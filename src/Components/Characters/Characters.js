import {useEffect, useState} from "react";
import Character from "./Character/Character";
import {Route, Switch} from "react-router-dom";
import CharacterDetails from "./Character/CharacterDetails/CharacterDetails";

export default function Characters(props) {

    console.log(props);

    let {match: {url}} = props;

    let [characters, setCharacters] = useState([]);

    const normalizationData = (data) => {
        const normalizeData = [];

        data.map(character => {
            Array.isArray(character)
                ? normalizeData.push(character[0])
                : normalizeData.push(character)
        })
        return normalizeData;
    }

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/characters')
            .then(value => value.json())
            .then(value => normalizationData(value))
            .then(value => setCharacters([...value]));
    }, [])

    return (
        <div>
            {
                characters.map((value, i) => <Character key={i} item={value} url={url}/>)
            }
        </div>
    );
}
