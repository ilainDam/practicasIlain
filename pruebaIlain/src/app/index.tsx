import React from 'react';
import { View } from 'react-native';
import ListaTarea from './EntregaExamen/ActividadListaTarea/ListaTarea';
import IndexEntrega from './EntregaExamen/Index';



const index = () => {
  return (
    <View style={{ flex: 1 }}>
      {IndexEntrega()}
      {/*HistorialUbicaciones()*/}
      {/* {Gps()} */}
    </View>
  )

}
export default index;