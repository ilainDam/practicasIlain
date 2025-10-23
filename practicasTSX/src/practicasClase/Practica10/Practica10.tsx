import React, { useState } from 'react'

type Props = {}

const Practica10 = (props: Props) => {

    const [contador, setContador] = useState<number[]>([]);

  return (
    <>
        <button onClick={()=>setContador([...contador,Math.trunc(Math.random()*100)])}>Generar numero</button>
        <p>Lista generada</p>
        {JSON.stringify(contador)}
    </>
  )
}

export default Practica10