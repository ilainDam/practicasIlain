import { drizzle, useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { useRouter } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAppContext } from '../../context/AppContextProvider';
import { personas } from '../../db/schema';



  const index = () => {
    const router = useRouter();
    let context = useAppContext();
  

    const db = useSQLiteContext();
    const drizzleDb = drizzle(db, { schema: {personas}});

    const { data: listaPersonas } = useLiveQuery( drizzleDb.select().from(personas));

    async function grabarPersona(){
      let aleatorio = Math.trunc(Math.random()*1000);
      await drizzleDb.insert(personas).values({ nombre: "persona" + aleatorio, edad: 27 + Math.trunc(aleatorio/5) })
    }
    
    return (
        <View style={{flex:1}}>
          <Button title="crear persona aleatoria" onPress={grabarPersona} />
          {
              listaPersonas.map(p=><Text key={p.id}>{JSON.stringify(p)}</Text>)
          }
        </View>
    )

  }
export default index