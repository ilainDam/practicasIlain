import React, { useState } from 'react'

type Props = {}

const ActividadComunicacionHijoPadreAleatorios = (props: Props) => {

  const [minimo, setminimo] = useState(0)
  const [maximo, setmaximo] = useState(100)
  const [aleatorio, setaleatorio] = useState<number>()
  return (
    <div data-testid="actividad-padre">
      <div>
        <div>
          Minimo
          <input data-testid="min-input" type="number" onChange={(evt) => setminimo(evt.currentTarget.valueAsNumber)} />
        </div>
        <div>
          Maximo
          <input data-testid="max-input" type="number" onChange={(evt) => setmaximo(evt.currentTarget.valueAsNumber)} />
        </div>
      </div>
      <GeneradorDeAleatorios setAleatorio={setaleatorio} maximo={maximo} minimo={minimo} />
    </div>
  )
}

export default ActividadComunicacionHijoPadreAleatorios

type GeneradorDeAleatoriosProps = {
  setAleatorio: Function
  minimo: number
  maximo: number
}

function GeneradorDeAleatorios(props: GeneradorDeAleatoriosProps) {
  let aleatorio = Math.trunc((Math.random() * (props.maximo - props.minimo)) + props.minimo);
  return (
    <div data-testid="generador-hijo">
      <br></br>
      <button data-testid="generar-btn">Generar</button>
      <p>Minimo</p>
      <p data-testid="limiteInferior">{props.minimo}</p>
      <p>Maximo</p>
      <p data-testid="limiteSuperior">{props.maximo}</p>
      <button onClick={() =>
        props.setAleatorio(aleatorio)}>Generar Aleatorio</button>
      <p>Aleatorio</p>
      <p>{aleatorio}</p>
    </div>
  )
}