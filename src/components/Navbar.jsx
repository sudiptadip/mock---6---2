import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontSize: '23px',
        fontWeight: '500',
        backgroundColor: 'skyblue',
        height: "80px",
      }}
    >
        <div onClick={()=> navigate('/')} style={{cursor: "pointer"}} >home</div>
        <div onClick={()=> navigate('/type')} style={{cursor: "pointer"}}>type</div>
        <div onClick={()=> navigate('/favorets')} style={{cursor: "pointer"}}>fevourets</div>
    </div>
  );
}
