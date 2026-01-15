import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'



export interface AppContextType{
    mensajeCompartido: string,
    numeroCompartido: number,
    setMensajeCompartido: Dispatch<SetStateAction<string>>,
    setNumeroCompartido: Dispatch<SetStateAction<number>>
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

const AppContextProvider = (props: any) => {
    const [mensajeCompartido, setMensajeCompartido] = useState("");
    const [numeroCompartido, setNumeroCompartido] = useState(0);

    const contextValues: AppContextType = {
        mensajeCompartido,
        numeroCompartido,
        setMensajeCompartido,
        setNumeroCompartido
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