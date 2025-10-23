import React, { useState, useEffect } from 'react';
import Reloj from '../Practica6/Reloj';

type Props = {}

const Practica23 = (props: Props) => {
  const [tick, setTick] = useState(0); 

    setInterval(() => {
      setTick(tick + 1);
    }, 1000);

  return (
    <>
      <Reloj zona="Europe/Madrid" />
    </>
  )
}

export default Practica23;
