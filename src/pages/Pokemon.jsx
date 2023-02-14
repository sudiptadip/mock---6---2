import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Pokemon() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const navigate = useNavigate()
 
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`)
      .then((e) => setData(e.data.results));
  }, [page]);

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
         onClick={()=> navigate(`/pokemon/${e.name}/${page+1+i}`)}
        >
          Pokemon Name :- {e.name}
        </div>
      ))}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "17px",
          gap: "10px",
          marginTop: '30px',
          marginBottom: "30px"
        }}
      >
        <button
          style={{ padding: "6px", width: "80px" }}
          onClick={() => setPage(page - 20)}
        >
          Pre
        </button>
        <span>{page / 20 + 1}</span>
        <button
          style={{ padding: "6px", width: "80px" }}
          onClick={() => setPage(page + 20)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
