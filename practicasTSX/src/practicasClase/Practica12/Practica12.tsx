import React, { useState } from 'react'

type Props = {}

const Practica12 = (props: Props) => {

    const [color, setcolor] = useState("")

  return (
    <>
        <div>Haz pulsado: {color} </div>
        <button onClick={()=>setcolor("Verde")}>Verde</button>
        <button onClick={()=>setcolor("Azul")}>Azul</button>
        <button onClick={()=>setcolor("Rojo")}>Rojo</button>
    </>
  )
}

export default Practica12