import { useEffect, useState } from "react";

const baseURL = "https://swapi.dev/api/";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchCharacters() {
            const response = await fetch(`${baseURL}/people`);
            const result = await response.json();

            setCharacters(result.results);
        }

        fetchCharacters();
    }, []);

    return (
        <>
            <h2>Characters List:</h2>

            <ul>
                {characters.map(character => <li key={character.name}>{character.name}</li>)}
            </ul>
        </>
    );
}
