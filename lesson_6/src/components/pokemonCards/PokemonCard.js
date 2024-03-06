import React from "react";
import { useEffect, useState } from 'react';
import classes from "./PokemonCard.module.css";
import axios from 'axios'

 
const PokemonCard=({pokemon})=>{
    const [pokemonOne, setPokemonOne]= useState([])


    const getPokemon=async ()=>{
      try {
        const {data}= await axios.get(pokemon.url)
        return data
      }catch(e){
        console.log(e.message);
      }
    }
    useEffect(()=>{
      getPokemon().then((pokemon)=>setPokemonOne(pokemon))
    }, [])
    
    return (
        <li className={classes.info}>
            {pokemon.name}
            <img src={pokemonOne.sprites.other.dream.world.front_default} />
        </li>
    )
}

export default PokemonCard;