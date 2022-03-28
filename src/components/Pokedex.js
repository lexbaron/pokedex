import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';


const Pokedex = () => {

    const userName = useSelector(state => state.userName)

    const [pokemons, setPokemons] = useState([])
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonTypes, setPokemonTypes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
            .then(res => {
                setPokemons(res.data?.results)
            })

        axios.get(`https://pokeapi.co/api/v2/type/`) 
            .then(res => {
                setPokemonTypes(res.data?.results)
            })   
    },[])

    const submit = e =>{
        e.preventDefault()
        navigate(`/pokedex/${pokemonName}`)
    }

    const handleType = e =>{
        axios.get(e.target.value)
        .then( res => setPokemons(res.data?.pokemon))
    }

    return (
        <div>
            <h1>pokedex</h1>
            <p>welcome {userName}</p>
            <div className="select">
                <select onChange={handleType}>
                    {pokemonTypes.map(pokemontype => (
                        <option key={pokemontype.url} value={pokemontype.url}>{pokemontype.name}</option>
                    )) }
                </select>
            </div>
            <form onSubmit={submit} className="input-container">
                <label htmlFor="pokemon-name">buscar por nombre o numero</label>
                <input 
                    type="text"
                    id='pokemon-name'
                    onChange={e => setPokemonName(e.target.value)}
                    value ={pokemonName} />
                <button>Buscar</button>
            </form>
           
            <ul className='pokemon-list'>
                {
                    pokemons.map(pokemon => (
                        <PokemonCard pokemonUrl={pokemon.url ? pokemon.url :pokemon.pokemon.url}
                         key={pokemon.url? pokemon.url: pokemon.pokemon.url}/>
                ))} 
            </ul>
        </div>
    );
};

export default Pokedex;