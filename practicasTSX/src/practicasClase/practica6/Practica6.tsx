import React from 'react'
import Reloj from './Reloj';

type Props = {}

const Practica6 = (props: Props) => {
    return (
        <>
            <Reloj zona="" />
            <Reloj zona="America/New_York" />
            <Reloj zona="Europe/London" />
            <Reloj zona="Europe/Madrid" />
        </>
    )
}

export default Practica6