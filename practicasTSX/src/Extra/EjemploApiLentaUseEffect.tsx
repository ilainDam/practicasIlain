import React, { useEffect, useState } from 'react'
type Props = {}
const EjemploApiLentaUseEffect = (props: Props) => {
    const [datosApi, setDatosApi] = useState(-1);
    async function obtenerDatosApi() {
        //emulamos llamada a API lenta. Cuando pasen 3 segundos cambiamos el state de datosApi
        // y se renderizará el componente. Se emula que se recibe un número aleatorio
        setTimeout(
            () => {//aquí la función a ejecutar
                let numeroRecibidoApi = Math.trunc(Math.random() * 100 + 1);
                setDatosApi(numeroRecibidoApi)
            },
            3000 // aquí el tiempo a esperar para lanzar la función
        );
    }
    //useEffect(() => {
    obtenerDatosApi();
    //}, [])
    return (
        <div>
            <h3>EjemploApiLentaUseEffect</h3>
            <p>Simula una llamada a una API lenta usando useEffect</p>
            {datosApi < 0 ? <h4>Cargando...</h4> : <h2>Datos cargados!! {datosApi}</h2>}
        </div>
    )
}
export default EjemploApiLentaUseEffect