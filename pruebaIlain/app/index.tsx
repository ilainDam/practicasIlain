import { Button, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import DetalleCasas from './DetalleCasas';
import { useRouter } from 'expo-router';
  const index = () => {
    const router = useRouter()

    return (

      <View style={{flex:1}}>

            <Text>Usuario: </Text>
            <TextInput placeholder='Usuario'/>

                <Button title='Ir a detalleCasas' onPress={()=>{
                    router.push(
                        {
                            pathname: "/DetalleCasas",
                            params:{idCasa:22}
                        }
                    )
                }}/>
      </View>
    )
  }
export default index