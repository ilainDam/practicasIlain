import React, { useState } from 'react'

type Props = {}

const Practica14 = (props: Props) => {

    const [contador, setcontador] = useState<number[]>([1, 1, 1, 1, 1, 1, 1, 1, 1])
    const array: Array<number> = [2, 3, 4, 5, 6, 7, 8, 9, 10]



    function comprobarMenor10(index : number,actual : Array<number>){
        if(actual[index]>10){
            actual[index]=1;
        }
        return actual;
    }


    function practicarTabla(numero: number, index: number) {
        let actual = [...contador]
        return (
            <>
                <p>Tabla del {numero}</p>
                <p>{numero}*{contador[index]}={numero * contador[index]}</p>
                <button onClick={() => {
                    actual[index] += 1;
                    actual=comprobarMenor10(index,actual)
                    setcontador(actual); 
                }}>Siguiente</button>
            </>
        )
    }

    return (
        <>
            {array.map((elemento, index) => {
                return practicarTabla(elemento, index);
            })}

        </>
    )
}

export default Practica14