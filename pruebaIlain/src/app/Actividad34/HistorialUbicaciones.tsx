import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

const HistorialUbicaciones = () => {
    const [position, setPosition] = useState<Location.LocationObject | null>(null);
    const [subscription, setSubscription] = useState<Location.LocationSubscription | null>(null);


    async function guardarDatos() {
        const strListaPosciones = await AsyncStorage.getItem('lista-posiciones'); 
        let listaPosiciones = [];
        if( strListaPosciones){
             listaPosiciones= JSON.parse(strListaPosciones);
        }

        listaPosiciones.push(position);

        
        const strListaPosciones2= JSON.stringify(listaPosiciones);
        await AsyncStorage.setItem('lista-posiciones', strListaPosciones2);

    };

    /*

            
            strlLista = papafrita.read()
            let lista = JSON.parse(strLista);
            lista.push(posicion)

            papafrita.write(JSON.stringfy(lista))

    */

    async function recuperarInformacion() {
        const strListaPosciones = await AsyncStorage.getItem('lista-posiciones'); 
        let listaPosiciones = [];
        if( strListaPosciones){
             listaPosiciones= JSON.parse(strListaPosciones);
        }
     
        return (
            <View>
                {
                    listaPosiciones.map( (p: any)=> {<Text>{JSON.stringify(p)}</Text>})
                }
                
            </View>
        )
    }

    const startLocationTracking = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('permiso no concedido'); return;
        }
        const locationSubscription = await Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.High,
                timeInterval: 1000, // observamos cada segundo
            },
            (newLocation) => { setPosition(newLocation); },
        );
        setSubscription(locationSubscription);
    };
    const stopLocationTracking = () => {
        subscription?.remove(); //desactivamos la suscripción
        setSubscription(null);
    };
    useEffect(() => {
        startLocationTracking(); //lanzamos la suscripción al iniciar el componente
        return () => {
            stopLocationTracking(); //eliminamos la suscripción
        };
    }, []);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}> GPS</Text>
            {position ? (
                <View >
                    <Text >Latitude: {position.coords.latitude}</Text>
                    <Text >
                        Longitude: {position.coords.longitude}
                    </Text>
                    <Text >Altitude: {position.coords.altitude}</Text>
                    <Text >Speed: {position.coords.speed}</Text>
                    <Text >
                        Timestamp: {new Date(position.timestamp).toLocaleString()}
                    </Text>
                    <Button title='Guardar Informacion' onPress={() => guardarDatos()} />
                    <Button title='Historial localizacion' onPress={()=> recuperarInformacion()}/>
                </View>
            ) : (<Text>loading</Text>)}
        </View>
    );
}
export default HistorialUbicaciones