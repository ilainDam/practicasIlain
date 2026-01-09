import React, { useState } from 'react'
import './TablaClicks.css'

type Props = {}

const TablaClicks = (props: Props) => {

    const [contador, setcontador] = useState<number[]>([1, 1, 1, 1, 1, 1, 1, 1, 1])
    const array: Array<number> = [1,2,3,4,5,6,7,8,9]


    function practicarTabla(index: number) {
        let actual = [...contador]
        return (
            <>
            <div className='apartadoTabla'>
                <p>Tabla {index}</p>
                <p>Veces Pulsadas {actual[index]}</p>
                <button onClick={() => {
                    actual[index] += 1;
                    setcontador(actual); 
                }}>Siguiente</button>
            </div>

            </>
        )

    }

    return (
        <>
            {array.map((elemento, index) => {
                return practicarTabla(elemento);
            })}

        </>
    )
}

export default TablaClicks
