import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { useAppContext } from '../context/AppContextProvider';
import ListaTarea from './ActividadListaTarea/ListaTarea';



  const index = () => {
    const router = useRouter();
    //const {persona, setPersona} = useContext(AppContext); 
    //const {personaActual: persona, setPersonaActual: setPersona} = useAppContext();
    let context = useAppContext();
   // let persona = context.personaActual;
    //let setPersona = context.setPersonaActual;

    return (
      
        <View style={{flex:1}}>
          {ListaTarea()}
        </View>
    )
  
  /*
          <Text>Usuario: </Text>
          <TextInput placeholder='Usuario'/>
              <Button title='Ir a detalleCasas' onPress={()=>{
                  let per: Persona ={
                    id: Math.trunc(Math.random()*1000),
                    nombre: "Pepito",
                    edad: 5
                  }
                  //agregamos al contexto
                  context.setPersonaActual(per);
                  router.push(
                      {
                          pathname: "/CrearPersona",
                          params:{idCasa:22}
                      }
                  )
              }}/>
  */
  }
export default index