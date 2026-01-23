import React from 'react';
import { View } from 'react-native';
import HistorialUbicaciones from './Actividad34/HistorialUbicaciones';



const index = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* {ListaTarea()} */}
      {HistorialUbicaciones()}
      {/* {Gps()} */}
    </View>
  )

}
export default index;