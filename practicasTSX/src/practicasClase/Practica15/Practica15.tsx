import React, { useState } from 'react'
import './Practica15.css'

type Props = {}

const Practica15 = (props: Props) => {
 
    const [color, setcolor] = useState("")
    return (
    <>
        <p>Botones y CSS</p>
        <p className={color}>Este area muestra el resultado de los botones</p>
        <button onClick={()=>setcolor("verde")}>Verde</button>
        <button onClick={()=>setcolor("rojo")}>Rojo</button>
        <button onClick={()=>setcolor("azul")}>Azul</button>
        <button onClick={()=>setcolor("rosa")}>Rosa</button>
    </>
  )
}

export default Practica15