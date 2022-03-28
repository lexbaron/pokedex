import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const PokemonCard = ({pokemonUrl}) => {

    const [pokemon, setPokemon] = useState({})

     useEffect(() => {
         axios.get(pokemonUrl)
         .then(res => {
            setPokemon(res.data)
         })
     },[pokemonUrl])

    return (
        <li className='col'>
            <Link to={`/pokedex/${pokemon.id}`} className='card'>
                <img src={pokemon.sprites?.front_default} alt="" />
                <h3>{pokemon.name}</h3>
                <p>{pokemon.id}</p>
            </Link>
        </li>
    );
};

export default PokemonCard;
