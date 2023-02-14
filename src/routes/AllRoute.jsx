import React from 'react'
import { Route, Routes } from 'react-router-dom'
import P_type from '../pages/P_type';
import Pokemon from '../pages/Pokemon';
import Favorites from '../pages/Favorites ';
import PokemonDetails from '../pages/PokemonDetails';
import TypeAll from '../pages/TypeAll';


export default function AllRoute() {
  return (
    <Routes>
        <Route path='/' element={<Pokemon/>} />
        <Route path='/pokemon/:name/:page' element={<PokemonDetails/>} />
        <Route path='/type' element={<P_type/>} />
        <Route path='/type/:name/:page' element={<TypeAll/>} />
        <Route path='/favorets' element={<Favorites/>} />
    </Routes>
  )
}