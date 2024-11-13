import { useEffect, useState } from "react"
import Character from "./Character";
import Paginator from "./Paginator";

const RickAndMorthyCharacters = () => {
    const [characters, setCharacetrs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then (response => response.json())
        .then (data => {
            setCharacetrs(data.results);
            setInfo(data.info);
            setIsLoading(false);
        })
    },[page])

    return (
    <div className="container">
        <h1 className = "text-center text-light ">Rick and Morthy</h1>
        <div className= "row row-cols-1 row-cols-md-2 g-4">
            {isLoading ? `cargando...` : ''}
            {characters.map(character => (
                <Character  
                key = {character.id} 
                id = {character.id}
                name={character.name} 
                image={character.image} 
                status={character.status} 
                species= {character.species} 
                location = {character.location.name}
                gender = {character.gender}/>
            ))}
        </div>
        <Paginator page = {page} info = {info} setPage={setPage}/>
    </div>
    )
}
export default RickAndMorthyCharacters;