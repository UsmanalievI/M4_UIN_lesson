import './App.css';
import Pokemonpage from './page/pokemonPage/PokemonPage';
import axios from "axios";

import { useEffect, useState } from 'react';

function App() {

  const getPokemonsList=async()=>{
    try {
      const data=await axios.get('https://pokeapi.co/api/v2/pokemon/')
      console.log(data);
    }catch(e){
      console.log('Error', e.message);
    }
  }

  useEffect(()=>{
    getPokemonsList()
  }, [])

  return (
    <>
      <Pokemonpage/>
    </>
  );
}

export default App;
