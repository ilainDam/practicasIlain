import React, { useState } from 'react'
type Props = {}
const practica21 = (props: Props) => {
  
  const [apuesta, setApuesta] = useState(-1);
  let nAleatorio = Math.trunc(Math.random() * 9);
  let acerto = null;
  function apostar(numero: number) {
    setApuesta(numero)
    if (numero == nAleatorio) {
      acerto = true;
    } else {
      acerto = false;
    }
  }

  return (
    <>
      <div>
        <button onClick={() => apostar(0)}>0</button>
        <button onClick={() => apostar(1)}>1</button>
        <button onClick={() => apostar(2)}>2</button>
        <button onClick={() => apostar(3)}>3</button>
        <button onClick={() => apostar(4)}>4</button>
        <button onClick={() => apostar(5)}>5</button>
        <button onClick={() => apostar(6)}>6</button>
        <button onClick={() => apostar(7)}>7</button>
        <button onClick={() => apostar(8)}>8</button>
        <button onClick={() => apostar(9)}>9</button>
        <div>
          <p>{acerto}</p>
        </div>
      </div>
    </>
  )
}

export default practica21