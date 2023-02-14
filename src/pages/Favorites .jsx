import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Favorites () {
  const [data,setData] = useState(JSON.parse(localStorage.getItem('pdata')) || [])
  const navigate = useNavigate()
  return (
    <div>
        <Navbar/>
        {
          data.map((e)=>(
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
           onClick={()=> navigate(`/pokemon/${e.name}/${e.id}`)}
            >
              {e.name}
            </div>
          ))
        }
    </div>
  )
}
