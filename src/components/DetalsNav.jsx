import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function DetalsNav() {
    const navigate = useNavigate()

    

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: "23px",
        fontWeight: "500",
        backgroundColor: "skyblue",
        height: "80px",
      }}
    >
      <div style={{cursor: 'pointer'}} onClick={()=> navigate('/')} >Back To Home</div>
      <div>
        <input style={{padding: '9px', borderRadius: '5px'}}  placeholder="search" />
        <button style={{padding: '9px',}}>Search</button>
      </div>

    </div>
  );
}
