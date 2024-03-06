import React from "react";
import { useEffect, useState } from 'react';
import classes from "./PokemonCard.module.css";
import axios from 'axios'

 
const PokemonCard=({pokemon})=>{
  const [pokemonOne, setPokemoneOne]=useState({})
  const getPokemon=async()=>{
    try {
      const {data}=await axios.get(pokemon.url)
      console.log(data);
      return data
    }catch(e){
      console.log("error", e.message);
    }
  }
  useEffect(()=>{
    getPokemon().then(pokemon=>setPokemoneOne(pokemon))
  }, [])
    
    return (
        <>
          <li className={classes.info}>
            {pokemon.name}
            <img src={pokemonOne.sprites.other.dream_world.front_default}/>
          </li>
        </>
    )
}

export default PokemonCard;