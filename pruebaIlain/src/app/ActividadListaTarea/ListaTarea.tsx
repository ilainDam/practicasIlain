import { navigate } from 'expo-router/build/global-state/routing';
import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppContext } from '../../context/AppContextProvider';

export default function ListaTarea() {
  //
  let context = useAppContext()
  //
  
  //
    return (
    <SafeAreaView>
      <Text>ListaTarea</Text>
        {context.listaTareas.map((elemento,index)=>(
            <Text key={index}>{elemento.texto} {elemento.activa ? "activo" : "Inactivo"}</Text>
        ))}

    <Button title='+' onPress={()=>{
      navigate("/ActividadListaTarea/CrearTarea")
    }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})