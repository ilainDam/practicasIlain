import React, { useState, useEffect } from 'react';
import Reloj from '../Practica6/Reloj';

type Props = {}

const Practica23 = (props: Props) => {
  const [tick, setTick] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(tick + 1);
    }, 1000);
  }, [tick]);

  return (
    <>
      <Reloj zona="Europe/Madrid" />
    </>
  )
}

export default Practica23;
