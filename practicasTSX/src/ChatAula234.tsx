import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {}

interface MensajeData {
    id: string
    mensaje: string
}

const ChatAula234 = (props: Props) => {

    const urlBase = 'http://192.168.234.10:3000/mensajes'
    const [inputMensaje, setinputMensaje] = useState("")
    const [listaMensajesData, setlistaMensajesData] = useState([] as MensajeData[])

    async function getMensajes() {
        const response = await axios.get(urlBase)
        const listaMensaje = response.data as MensajeData[]
        setlistaMensajesData(listaMensaje)
    }
    async function enviarMensaje() {
        await axios.post(urlBase, { mensaje: inputMensaje })
        getMensajes()
    }
    useEffect(() => {

        const id = setInterval(() => {
            getMensajes();
        },100)
        getMensajes();
        return () => {
            clearInterval(id);
        }
    }, [])


    return (
        <>
            <h1>Chat del aula 234</h1>
            <div>{JSON.stringify(listaMensajesData)}</div>
            <input type='text' id='inputMensaje' placeholder='Mensaje' onChange={(evt) => {
                setinputMensaje(evt.currentTarget.value)
            }} />
            <button onClick={enviarMensaje}>Enviar</button>
        </>
    )
}

export default ChatAula234