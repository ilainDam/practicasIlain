import React from 'react'
import Reloj from '../Practica6/Reloj';

type Props = {}

const Practica16 = (props: Props) => {
  const array = ["Europe/Madrid","Europe/London","America/New_York","Europe/Paris","Europe/Berlin"]
    return (
    <>
        {array.map((elemento,index)=>{
            return <Reloj zona={elemento}/>
        })}
    </>
  )
}

export default Practica16