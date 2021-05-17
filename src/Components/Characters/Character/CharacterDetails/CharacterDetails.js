import {useEffect, useState} from "react";

export default function CharacterDetails({match: {params: {id}}}) {
    const [character, setCharacter] = useState(null);

    const normalizationData = (character) => {
        return Array.isArray(character)
            ? character[0]
            : character
    }

    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/characters/' + id)
            .then(value => value.json())
            .then(value => normalizationData(value))
            .then(value => setCharacter(value));
    }, [])

    return (
        <div>
            {character && <div>
                {character.images
                    ? <img src={character.images.main} alt=""/>
                    : <img
                        src='https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
                        alt='/'/>}
                <br/>
                {character.name ?
                    <div>Name: {character.name.first} {character.name.middle} {character.name.last}</div> :
                    <div>Name: No name</div>}
                <br/>
                Age: {character.age}.
                <br/>
                Gender: {character.gender}.
                <br/>
                Species: {character.species}.
                <br/>
                Home planet: {character.homePlanet}
            </div>
            }
        </div>
    );
}
