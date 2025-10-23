import React, { useState } from 'react'

const Practica11 = () => {
  const [horactual, sethoractual] = useState("");
  
  let dato = 1;

  function actualizar(){
    Practica11.atributoEstatico++;
    dato++;
    console.log("Estático: " + Practica11.atributoEstatico);
    console.log("dato: " + dato);
    //sethoractual("" + new Date());
  }

  return (
    <>
      <h3>ComponenteConEstatico</h3>
      <p>Info en estático: {Practica11.atributoEstatico}</p>
      <button onClick={actualizar}>Actualizar</button>
    </>
  );
}

Practica11.atributoEstatico = 2;

export default Practica11
