import React from 'react'

type Props = { 

    zona: string;
}
const Reloj = (props: Props) => {
    const zonaHoraria= props.zona || "Europe/Madrid";
    const fecha = new Date().toLocaleDateString("es-ES",{timeZone : zonaHoraria}) 
  return (
    <>
    <div>{zonaHoraria+" "+fecha}</div>
    </>

  ) 
}
export default Reloj