import {useEffect, useState} from "react";
import Character from "./Character/Character";
import {Route, Switch} from "react-router-dom";
import CharacterDetails from "./Character/CharacterDetails/CharacterDetails";

export default function Characters(props) {

    console.log(props);

    let {match: {url}} = props;

    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/characters')
            .then(value => value.json())
            .then(value => {
                setCharacters([...value])
            });
    }, [])

    console.log(characters);

    return (
        <div>
            {
                characters.map(value => <Character key={value.id} item={value} url={url}/>)
            }

            <Switch>
                {/*<Route path={'/Characters/:id'} component={CharacterDetails}/>*/}
            </Switch>
        </div>
    );
}