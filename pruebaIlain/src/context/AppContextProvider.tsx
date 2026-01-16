import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';




export type Persona={
    nombre: string,
    id: number,
    edad: number
}

export type Tarea={
    texto: string,
    activa: boolean
    id: number
}

export interface AppContextType{
    personaLista : Persona[],
    setPersonaLista : Dispatch<SetStateAction<Persona[]>>,
    personaActual: Persona,
    setPersonaActual: Dispatch<SetStateAction<Persona>>,
    listaTareas : Tarea[],
    setListaTareas :  Dispatch<SetStateAction<Tarea[]>>

    
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

const AppContextProvider = (props: any) => {

    const [personaActual, setPersonaActual] = useState<Persona>({} as Persona);
    const [personaLista, setPersonaLista] = useState<Persona[]>([])
    const [listaTareas, setListaTareas] = useState<Tarea[]>([])

    const contextValues: AppContextType = {
        personaLista : personaLista,
        setPersonaLista : setPersonaLista,
        personaActual: personaActual,
        setPersonaActual: setPersonaActual,
        listaTareas : listaTareas,
        setListaTareas : setListaTareas
    }
  return (
    <AppContext.Provider value={contextValues}>
        {props.children}
    </AppContext.Provider>
  )
}

export const useAppContext = () =>{
    return useContext(AppContext); 
}

export default AppContextProvider