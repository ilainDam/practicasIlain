import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
const Index = () => {
    //
    let rangoNumeros = [
        [0, 9],
        [10, 19],
        [20, 29],
        [30, 39],
        [40, 49],
        [50, 59],
        [60, 69],
        [70, 79],
        [80, 89],
        [90, 99]
    ];

    const [numeroAleatorio, setNumeroAleatorio] = useState<number>()
    const [resetear, setResetear] = useState(0)
    const [rangoSeleccionado, setRangoSeleccionado] = useState<number[] | null>(null)
    //
    //
    useEffect(() => {
        setNumeroAleatorio(Math.trunc(Math.random() * 100))
    }, [resetear])
    //
    function generarNumeroRango(){
        if(rangoSeleccionado){
            const botones = [];
            for (let index = rangoSeleccionado[0]; index <= rangoSeleccionado[1]; index++) {
                botones.push(<Button key={index} title={index+""} onPress={()=>adivinarNumero(index)}/>);
            }
            return botones;
        }
    }
    function adivinarNumero(numero : number){
        if(numeroAleatorio){
            if(numero === numeroAleatorio){
            alert("Ganaste Wuuuu")
            setResetear(resetear+1)
        } else {
            if(numero>numeroAleatorio){
                alert("El numero es menor")
            } else {
                alert("El numero es mayor")
            }
            setRangoSeleccionado(null)
        }
        }
    }
    return (
        <View>
            {
                rangoSeleccionado == null
                    ?
                    //Seleccionar rango
                    <View>
                        <Text style={estilos.texto}>Selecciona un rango:</Text>
                        {rangoNumeros.map((elemento, index) => (
                            <Button key={elemento[0] + "-" + elemento[1]} title={elemento[0] + "-" + elemento[1]} onPress={() =>
                                setRangoSeleccionado([...elemento])
                            } />
                        ))}
                    </View>
                    :
                    //Rango seleccionado
                    <View>
                        <Text style={estilos.texto}>Adivina el numero secreto</Text>
                        {generarNumeroRango()}
                    </View>
            }
        </View>
    )
}

const estilos = StyleSheet.create({
    texto:{
        fontWeight: 'bold', 
        textAlign: 'center' 
    } 
})


export default Index