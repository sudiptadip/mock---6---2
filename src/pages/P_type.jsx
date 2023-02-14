import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'

export default function P_type() {
  const [data, setData] = useState([]);
 
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/type`)
      .then((e) => setData(e.data.results));
  }, []);

  return (
    <div>
      <Navbar />
      {data.map((e,i) => (
        <div
          style={{
            height: "50px",
            display: "flex",
            border: "1px solid black",
            marginBottom: "10px",
            alignItems: "center",
            padding: "20px",
            fontSize: "20px",
            fontWeight: 500,
            cursor: "pointer",
          }}
         onClick={()=> navigate(`/type/${e.name}/${1+i}`)}
        >
          Pokemon Type :- {e.name}
        </div>
      ))}
    </div>
  );
}
