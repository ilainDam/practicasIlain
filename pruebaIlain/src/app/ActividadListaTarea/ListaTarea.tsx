import Icon from '@expo/vector-icons/Fontisto';
import { navigate } from 'expo-router/build/global-state/routing';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
    // const neoArray = context.listaTareas.map((elemento,index2)=>{
    //   let auxiliar = elemento.activa;
    //   if (index === index2) {
    //     swap(auxiliar);
    //   }
    //   return elemento
    // })
  
    // context.setListaTareas(neoArray);

  }

  function swap(miBool:boolean){
    if (miBool === true) {
      miBool = false;
    }else {
      miBool = true;
    }
  }

  function CrearIdTarea() {

  }
  //
  return (
    <SafeAreaView style={{ flex: 1, borderColor: "red", borderStyle: 'solid', borderWidth: 2, padding: 0, margin: 0 }}>
      <View style={{ flex: 1, alignItems: 'center', borderColor: "red", borderStyle: 'solid', borderWidth: 2 }}>
        <Text>ListaTarea</Text>
        {context.listaTareas.map((elemento, index) => (
          <View key={index}>
            {elemento.activa ?
              <Icon name="checkbox-active" size={24} color="black" onPress={() => {
                // checkboxTarea(index)
                context.setListaTareas(checkboxTarea(index))
              }} />
              :
              <Icon name="checkbox-passive" size={24} color="black" onPress={() => {
                // checkboxTarea(index)
                context.setListaTareas(checkboxTarea(index))
              }} />
            }
            <Text style={{ width: '90%', backgroundColor: "#e1e8e4" }}>{elemento.texto}</Text>
          </View>
        ))}
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", borderColor: "red", borderStyle: 'solid', borderWidth: 2 }}>
        <Button title='+' onPress={() => {
          navigate("/ActividadListaTarea/CrearTarea")
        }} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})