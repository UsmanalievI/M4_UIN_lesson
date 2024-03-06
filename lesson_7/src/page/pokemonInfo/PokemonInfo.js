import React from "react";
import classes from "./PokemonInfo.module.css"
import {useParams} from "react-router-dom"
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

const PokemonInfo=()=>{
    const {id}=useParams()
    const [pokemon, setPokemon]= useState({})
    const [loading, setLoading]=useState(false)

    const getPokemonById= async()=>{
        setLoading(true)
        try{
            const {data}=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            return data
        }catch(e){
            console.log(e.message);
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getPokemonById().then(pokemon=>setPokemon(pokemon))
    }, [id])

    return(
        <>
         {
            loading?<p>Loading...</p>
            :<div className={classes.list}>
                <img src={pokemon.sprites?.other?.dream_world?.front_default} className={classes.img}/>
                <p>Name:{pokemon.name}</p>
                <p>Types:{pokemon.types?.map(value=>value.type.name).join(', ')}</p>
                <p>Stats:{pokemon.stats?.map(value=>value.stat.name).join(', ')}</p>
                <p>Abilities:{pokemon.abilities?.map(value=>value.ability.name).join(', ')}</p>
                <p>Some moves:{pokemon.moves?.slice(0,5).map(value=>value.move.name).join(', ')}</p>
            </div>
         }
        </>
    )
}

export default PokemonInfo;