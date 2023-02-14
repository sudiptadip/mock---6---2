import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Typenav() {
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
        <div style={{cursor: 'pointer'}} onClick={()=> navigate('/type')} >Back To Type</div>  
      </div>
    );
}
