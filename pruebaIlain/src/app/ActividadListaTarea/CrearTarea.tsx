import { Tarea, useAppContext } from '@/src/context/AppContextProvider';
import { navigate } from 'expo-router/build/global-state/routing';
import React, { useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function CrearTarea() {
  //
  let context = useAppContext();
  const [activado, setActivado] = useState<boolean>(false)
  const [texto, setTexto] = useState<string>("")
  //
  function agregarLista() {
    let nTarea: Tarea = {
      activa: activado,
      texto,
      id:context.listaTareas.length+1
    }
    context.setListaTareas([...context.listaTareas, nTarea])
  }
  //
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: "#dfdedeff" }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: "95%"}}>
        <Text>{activado ? "Terminada" : "Activada"}</Text>
        <Switch value={activado} onChange={()=>{
          setActivado(!activado)
        }}/>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', borderColor: "red", width: "95%" , backgroundColor:"white" }}>
        <TextInput multiline={true} style={{ textAlignVertical: 'top', flex: 1 }} onChangeText={(e) => {
          setTexto(e);
        }} />
      </View>
      <View style={{width:"100%"}}>
        <Button title='Finalizar edicion' onPress={() => {
          agregarLista()
          navigate("/ActividadListaTarea/ListaTarea")
        }} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})