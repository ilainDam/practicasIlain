import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { useAppContext } from '../context/AppContextProvider';
import ListaTarea from './ActividadListaTarea/ListaTarea';



  const index = () => {
    const router = useRouter();
    let context = useAppContext();

    return (
        <View style={{flex:1}}>
          {ListaTarea()}
        </View>
    )

  }
export default index