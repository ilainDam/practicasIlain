import React, { useEffect, useState } from 'react'

type Props = {}

const EjemploRelojActivo = (props: Props) => {
    const [fechaactual, setfechaactual] = useState<string>()
    useEffect(() => {
        const timerID = setInterval(
            tick,
            1000
        )
    }, [])

    function tick() {
        const newfecha = "" + new Date();
        //setfechaactual(newfecha)
        console.log(newfecha); 
    }

    return (
        <div>
            <h3>Ejemplo Reloj Dinámico</h3>
            <div>
                {fechaactual}
            </div>
        </div>
    )
}

export default EjemploRelojActivo
