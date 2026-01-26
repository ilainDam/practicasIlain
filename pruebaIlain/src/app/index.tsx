import React from 'react';
import { View } from 'react-native';
import ListaTarea from './ActividadListaTarea/ListaTarea';



const index = () => {
  return (
    <View style={{ flex: 1 }}>
      {ListaTarea()}
      {/*HistorialUbicaciones()*/}
      {/* {Gps()} */}
    </View>
  )

}
export default index;