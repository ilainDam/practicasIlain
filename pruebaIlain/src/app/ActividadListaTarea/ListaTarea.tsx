import Icon from '@expo/vector-icons/Fontisto';
import { navigate } from 'expo-router/build/global-state/routing';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAppContext } from '../../context/AppContextProvider';

export default function ListaTarea() {
  //
  const context = useAppContext()
  //
  function checkboxTarea(index: number) {
    let lista = [...context.listaTareas]
    let tarea = context.listaTareas[index]
    tarea.activa = !tarea.activa
    context.listaTareas[index] = tarea
    return lista
  }

  function IconoCheckbox(activo: boolean, index: number) {
    let checkbox = activo ? "checkbox-active" : "checkbox-passive"
    return (
      <View style={{ marginRight: 10 }}>
        <Icon name={checkbox as any} size={24} color="#3483eb" onPress={() => { context.setListaTareas(checkboxTarea(index)) }} />
      </View>
    )
  }
  function borrarTarea(index: number) {
    return (
      <Icon name="trash" size={24} color="#3483eb" onPress={() => {
        let lista = [...context.listaTareas]
        lista.splice(index, 1)
        context.setListaTareas(lista)
      }} />
    )
  }
  function CrearIdTarea() {

  }
  //
  return (
    <View style={{ flex: 1,padding: 0, margin: 0 }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>ListaTarea</Text>
        {context.listaTareas.map((elemento, index) => (
          <View key={index} style={{ margin: 2, width: '90%', backgroundColor: "#e6e6e6", flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{alignItems: 'center', marginLeft: 10, flexDirection: 'row' }}>
              {IconoCheckbox(elemento.activa, index)}
              {context.listaTareas[index].activa ? 
              <Text style={{ flexShrink: 1, flexWrap: "wrap", textDecorationLine:'line-through'}}>{elemento.texto}</Text> 
              : 
              <Text style={{ flexShrink: 1, flexWrap: "wrap"}}>{elemento.texto}</Text>}
            </View>

            <View style={{alignItems: 'center', marginRight: 10, flexDirection: "row" }}>
              {borrarTarea(index)}
            </View>

          </View>
        ))}
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end"}}>
        <Button title='+' onPress={() => {
          navigate("/ActividadListaTarea/CrearTarea")
        }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})