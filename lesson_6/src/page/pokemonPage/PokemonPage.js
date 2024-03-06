import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios'
import PokemonCard from "../../components/pokemonCards/PokemonCard";
 
const PokemonPage=()=>{
    const [pokemonList, setPokemonList]= useState([])


    const getPokemonList=async ()=>{
      try {
        const {data}= await axios.get('https://pokeapi.co/api/v2/pokemon/')
        return data.results
      }catch(e){
        console.log(e.message);
      }
    }
    useEffect(()=>{
      getPokemonList().then((pokemonList)=>setPokemonList(pokemonList))
    }, [])
    return (
        <>
            <ul>
                {pokemonList.map(pokemon=><PokemonCard pokemon={pokemon}/>)}
            </ul>
        </>
    )
}

export default PokemonPage;