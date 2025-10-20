import React, { useState } from 'react'


const Practica05 = () => {

    const [listaAlumno, setLista] = useState<string[]>([])
    const agregarAlumno = (nombre: string) => {
        setLista([...listaAlumno,nombre])
    }

  return (
    <div>
        Practica05

    </div>

  )
}

export default Practica05