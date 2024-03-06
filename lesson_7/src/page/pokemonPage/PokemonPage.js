import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios'
import PokemonCard from "../../components/pokemonCards/PokemonCard";
import classes from './PokemonPage.module.css';
import Pagination from "../../components/pagination/Pagination";
 
const PokemonPage=()=>{
    const [pokemonList, setPokemonList]= useState([])
    const [offset, setOffset]=useState(1)
    const [limit, setLimit]=useState(12)
    
    const handlePrev=()=>{
      setOffset(prev=>prev-limit)
    }
    const handleNext=()=>{
      setOffset(prev=>prev+limit)
    }
    const page=Math.floor(offset/limit)+1

    const getPokemonList=async ()=>{
      try {
        const {data}= await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
        return data.results
      }catch(e){
        console.log(e.message, 'dont work');
      }
    }

    useEffect(()=>{
      getPokemonList().then((pokemonList)=>setPokemonList(pokemonList))
    }, [offset, limit])
    
    

    return (
        <>
            <ul className={classes.infos}>
              {pokemonList.map(pokemon=><PokemonCard key={pokemon.name} pokemon={pokemon}/>)}
              <Pagination handlePrev={handlePrev} handleNext={handleNext} page={page}/>
            </ul>
        </>
    )
}

export default PokemonPage;