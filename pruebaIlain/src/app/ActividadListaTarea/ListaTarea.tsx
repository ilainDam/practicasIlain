import Icon from '@expo/vector-icons/Fontisto';
import { router } from 'expo-router';
import { navigate } from 'expo-router/build/global-state/routing';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Tarea, useAppContext } from '../../context/AppContextProvider';

export default function ListaTarea() {
  let iconoCheckBoxActivo = "checkbox-active";
  let iconoCheckBoxPasivo = "checkbox-passive";

  //
  const context = useAppContext()
  let azul = "#3483eb"
  //
  function cambiarEstadoTareaActivoNoActivo(tareaAModificar : Tarea) {
    let listaNueva = context.listaTareas.filter(t=>t.id !=tareaAModificar.id );
    tareaAModificar.activa = !tareaAModificar.activa
    listaNueva.push(tareaAModificar);
    context.setListaTareas(listaNueva);
  }

  function IconoCheckbox(elementoId : number) {
    let tareaEncontrada = context.listaTareas.find(t => t.id == elementoId);
    if( tareaEncontrada){
      let checkbox = tareaEncontrada.activa ? iconoCheckBoxActivo : iconoCheckBoxPasivo;
    return (
      <View style={{ marginRight: 10 }}>
        <Icon name={checkbox as any} size={24} color={azul} onPress={()=>cambiarEstadoTareaActivoNoActivo(tareaEncontrada) } />
      </View>
    )      
    }else return (<View></View>);
  }
  function borrarTarea(index: number) {
    return (
      <Icon name="trash" size={24} color={azul} onPress={() => {
        let lista = [...context.listaTareas]
        lista.splice(index, 1)
        context.setListaTareas(lista)
      }} />
    )
  }
  function editarTarea(index: number) {
    return(
      <Icon name="thermometer-alt" size={24} color={azul} onPress={()=>{
        router.push({
          pathname:"/ActividadListaTarea/CrearTarea",
          params:{id:index}
        })
      }}/>
    )
  }
  //
  return (
    <View style={{ flex: 1,padding: 0, margin: 0 }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>ListaTarea</Text>
        {context.listaTareas.map((elemento, index) => (
          <View key={elemento.id} style={{ margin: 2, width: '90%', backgroundColor: "#e6e6e6", flexDirection: 'row', alignItems: 'center' }}>

            <View style={{ flex:1 ,   alignItems: 'center', marginLeft: 10, flexDirection: 'row' }}>
              {IconoCheckbox(elemento.id)}
              {elemento.activa ? 
              <Text style={{ flexShrink: 1, flexWrap: "wrap", textDecorationLine:'line-through'}}>{elemento.texto}</Text> 
              : 
              <Text style={{ flexShrink: 1, flexWrap: "wrap"}}>{elemento.texto}</Text>}
            </View>

            <View style={{alignItems: 'center', marginRight: 10, flexDirection: "row" }}>
              {editarTarea(index)}
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