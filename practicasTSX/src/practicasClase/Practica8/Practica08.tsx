import React, { useState } from 'react'

type Props = {}

const Practica08 = (props: Props) => {

    const [contador, setcontador] = useState(0)

  return (
    <>
    
        <p>Haz hecho click {contador} veces</p>
        <button onClick={()=>setcontador(contador+1)}>Contador</button>
    </>
  )
}

export default Practica08