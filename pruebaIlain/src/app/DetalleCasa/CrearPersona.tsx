import { navigate } from 'expo-router/build/global-state/routing';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Persona, useAppContext } from '../../context/AppContextProvider';

export default function CrearPersona() {
    let context = useAppContext();
    let idNuevo = context.personaLista.length + 1;
    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState<number>(0)

    function guardarUsuario(){
        let nPersona : Persona = {
            id : idNuevo,
           // nombre : nombre,
           nombre,
           // edad : edad
           edad

        }
        context.setPersonaLista([...context.personaLista , nPersona]);
    }

    return (
        <View style={{ flex: 1 }}>
            <Text>Id : {idNuevo}</Text>
            <Text>nombre</Text>
            <TextInput placeholder='Nombre' onChangeText={(e) => setNombre(e)}></TextInput>
            <Text>edad</Text>
            <TextInput placeholder='Nombre' onChangeText={(e) => setEdad(parseInt(e))}></TextInput>
            <Button title='Enviar' onPress={()=>{
                guardarUsuario();
                navigate("/DetalleCasa/DetalleCasas");
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({})