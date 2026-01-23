import React from 'react';
import { Text, View } from 'react-native';
import { useAppContext } from '../../context/AppContextProvider';

type Props = {}
//const {idCasa} = useLocalSearchParams()
const DetalleCasas = (props: Props) => {
    let context = useAppContext();
  return (
    <View style={{flex:1, backgroundColor: "gray"}}>
      <Text> 
      {JSON.stringify(context.personaLista)}
      </Text>
    </View>
  )
}

export default DetalleCasas