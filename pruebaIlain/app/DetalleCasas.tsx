import { useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

type Props = {}
const {idCasa} = useLocalSearchParams()
const DetalleCasas = (props: Props) => {
  return (
    <View style={{flex:1}}>
      <Text>
        {idCasa}
      </Text>
    </View>
  )
}

export default DetalleCasas