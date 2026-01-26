import { Tarea, useAppContext } from '@/src/context/AppContextProvider';
import { useLocalSearchParams } from 'expo-router';
import { navigate } from 'expo-router/build/global-state/routing';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function CrearTarea() {
  //
  let context = useAppContext();
  const [activa, setActivado] = useState<boolean>(false)
  const [texto, setTexto] = useState<string>("")
  const [id, setId] = useState<number>(context.listaTareas.length + 1)
  const { idParametros } = useLocalSearchParams();
  //
  function agregarLista() {
    let nTarea: Tarea = {
      activa,
      texto,
      id
    }
    context.setListaTareas([...context.listaTareas, nTarea])
  }
  function modificarLista(){
    let listaNueva = [...context.listaTareas]
    let tareaModificar = listaNueva.find(t=>t.id==parseInt(idParametros[0]))
    if(tareaModificar){
       tareaModificar.activa = activa;
       tareaModificar.id = id
       tareaModificar.texto = texto
    }
    context.setListaTareas([...listaNueva])

  }
  useEffect(() => {
    console.log(idParametros)
    if (idParametros) {
      let idParseada = parseInt(idParametros[0])
      let tarea = context.listaTareas.find(t => t.id == idParseada)
      if (tarea) {
        setActivado(tarea.activa)
        setId(tarea.id)
        setTexto(tarea.texto)
      }
    }
  }, [])
  //
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: "#dfdedeff" }}>
      <Text>Editando tarea {id}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: "95%" }}>
        <Text>{activa ? "Terminada" : "Activada"}</Text>
        <Switch value={!activa} onChange={() => {
          setActivado(!activa)
        }} />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', borderColor: "red", width: "95%", backgroundColor: "white" }}>
        <TextInput value={texto} multiline={true} style={{ textAlignVertical: 'top', flex: 1 }} onChangeText={(e) => {
          setTexto(e);
        }} />
      </View>
      <View style={{ width: "100%" }}>
        <Button title='Finalizar edicion' onPress={() => {
          if(idParametros){
            modificarLista()
          }else{
            agregarLista()
          }
          navigate("/ActividadListaTarea/ListaTarea")
        }} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})