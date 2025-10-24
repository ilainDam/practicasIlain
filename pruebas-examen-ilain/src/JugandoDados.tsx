import React, { useState } from 'react'

type Props = {}

const JugandoDados = (props: Props) => {

    const [total, setotal] = useState<number>(0)
    const [sumaTotal, setsumaTotal] = useState<number[]>([])
    
    function generarAleatorio() {
        let aleatorio=Math.trunc((Math.random() * 6)+1)
        let suma: number[]
        suma = [...sumaTotal]
        suma.push(aleatorio)
        setsumaTotal(suma);
        setotal(total+aleatorio)
    }




    return (
        <>
            <button data-testid="btnLanzarDado" onClick={generarAleatorio}>Lanzar dado</button>
            <button data-testid="btnNuevaSerie">Nueva Serie</button>
            <ul data-testid="listaTiradas">
                {sumaTotal.map((elemento, index) => {
                    return <li key={index} data-testid="liEnListaTiradas">{sumaTotal[index]}</li>
                })}
            </ul>
            <p data-testid="puntuacionActual">{total}</p>
        </>
    )
}

export default JugandoDados