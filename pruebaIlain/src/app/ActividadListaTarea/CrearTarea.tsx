import { Tarea, useAppContext } from '@/src/context/AppContextProvider';
import { navigate } from 'expo-router/build/global-state/routing';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function CrearTarea() {
  //
  let context = useAppContext();
  const [activado, setActivado] = useState<boolean>(true)
  const [texto, setTexto] = useState<string>("")
  //
    function agregarLista(){
        let nTarea : Tarea = {
            activa : activado,
            texto,
            id : context.listaTareas.length+1
        }
        context.setListaTareas([...context.listaTareas , nTarea ])
    }
  //
    return (
    <View>
      <Button title='Alternar activado' onPress={()=>{
        setActivado(!activado)
      }}/>
      <TextInput onChangeText={(e)=>{
        setTexto(e);
      }}/>
      <Button title='Finalizar edicion' onPress={()=>{
        agregarLista()
        navigate("/ActividadListaTarea/ListaTarea")
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({})