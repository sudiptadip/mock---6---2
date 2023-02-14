import axios from "axios";
import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import DetalsNav from "../components/DetalsNav";

export default function PokemonDetails() {
  const { name, page } = useParams();
  const [data, setData] = useState({});
  const [url,setUrl] = useState('')

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-form/${page}/`)
      .then((e) => setUrl(e.data.sprites.back_default));
  }, [page]);


  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${page}/`)
      .then((e) => setData(e.data));
  }, []);



  function addTowishlist(){
    let da = JSON.parse(localStorage.getItem('pdata')) || []
    localStorage.setItem('pdata',JSON.stringify([...da,data]))
    alert("add to wishlist sucessful")
}
  console.log(data.moves)
  return (
    <div>
      <DetalsNav />
      <div> <h1>Name :- {name}</h1> 
      <button onClick={addTowishlist} style={{marginLeft: '600px',cursor: 'pointer', backgroundColor: 'orange'}} >Add to Wishlist</button> </div>  
      <div>{
        <img src={url} alt="" />
        }</div>
      <div>Ids : - {data.id}</div>
      <div>
        
      </div>
      <div>
        Base Experience : - {data.base_experience}
        <div>
          height : - {data.height}
        </div>
      </div>
      Weight : - {data.weight} kg.
    </div>
  );
}
