import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexInfo = () => {

    const [pokemon, setPokemon] = useState({})

    const {id} = useParams()
    
    useEffect(() => {
        axios.get(` https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            setPokemon(res.data)
            console.log(res.data)
        } )
    }, [id])


    return (
        <div className='pokemon-detail'>
            <img src={pokemon.sprites?.front_default} alt="" />
            <h3>#{pokemon.id}</h3>
            <h3>{pokemon.name}</h3>
            <p> <b> peso</b> {pokemon.weight}</p>
            <p> <b>altura</b>  {pokemon.height}</p>
            <p> <b>tipo</b>  {pokemon.types?.[0].type.name}</p>
            <p> <b>habilidades</b>  {pokemon.abilities?.[0].ability.name}</p>
            <h3>Stats</h3>
            <div>
                <p>{pokemon.stats?.[0].stat.name} {pokemon.stats?.[0].base_stat}</p>
                <p>{pokemon.stats?.[1].stat.name} {pokemon.stats?.[1].base_stat}</p>
                <p>{pokemon.stats?.[2].stat.name} {pokemon.stats?.[2].base_stat}</p>
                <p>{pokemon.stats?.[5].stat.name} {pokemon.stats?.[5].base_stat}</p>
            </div>
        </div>
    );
};

export default PokedexInfo;