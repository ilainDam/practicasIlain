import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Image, Text, View } from 'react-native'
//
type Props = {}
interface RootObject {
    success: boolean;
    deck_id: string;
    cards: Card[];
    remaining: number;
}

interface Card {
    code: string;
    image: string;
    images: Images;
    value: string;
    suit: string;
}

interface Images {
    svg: string;
    png: string;
}
//
const index = (props: Props) => {
    //
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    let urlDetras = "https://deckofcardsapi.com/static/img/back.png";
    const [deckId, setDeckId] = useState("")
    const [misCartas, setMisCartas] = useState<Card[]>([])
    const [cartasBanco, setCartasBanco] = useState<Card[]>([])
    const [reseteo, setReseteo] = useState<number>(0)
    const [conteoJugador, setConteoJugador] = useState<number>(0)
    const [conteoBanco, setConteoBanco] = useState<number>(0)
    //
    async function iniciarID() {
        let respuesta = await axios.get(url)
        setDeckId(respuesta.data.deck_id as string)
        return respuesta.data.deck_id;
    }
    async function sacarCartas(iddeck: string, cantidad: number) {
        let cartas = await axios.get(`https://deckofcardsapi.com/api/deck/${iddeck}/draw/?count=${cantidad}`)
        return cartas.data.cards;
    }
    function añadirJugador(cartas: Card[]) {
        setMisCartas(prevCartas => [...prevCartas, ...cartas])
        return cartas;
    }
    function añadirBanco(cartas: Card[]) {
        setCartasBanco(prevCartas => [...prevCartas, ...cartas])
        return cartas;
    }
    function reiniciarJuego() {
        setMisCartas([]);
        setCartasBanco([]);
        setReseteo(prev => prev + 1);
    }
    function calcularConteo(cartas: Card[]) {
        let total = 0;
        let ases = 0;
        cartas.forEach(carta => {
            if (carta.value === 'JACK' || carta.value === 'QUEEN' || carta.value === 'KING') {
                total += 10;
            } else if (carta.value === 'ACE') {
                ases += 1;
                total += 11;
            } else {
                total += parseInt(carta.value);
            }
        });
        while (total > 21 && ases > 0) {
            total -= 10;
            ases -= 1;
        }
        return total;
    }


    //
    useEffect(() => {
        let mico = async () => {
            let id = await iniciarID()
            await añadirJugador((await sacarCartas(id, 2)));
            await añadirBanco((await sacarCartas(id, 2)));
        }
        mico();
    }, [reseteo])
    //
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={{ backgroundColor: "lightpink", flex: 1, alignItems: "center", padding: 10 }}>
                <Text>
                    ID: {deckId}
                </Text>
                <Text>
                    Player Total: {calcularConteo(misCartas)}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '60%', marginTop: 10 }}>
                    <Button title='Sacar carta' onPress={async () => {
                        const nuevasCartas = await sacarCartas(deckId, 1);
                        añadirJugador(nuevasCartas);
                        const manoActual = [...misCartas, ...nuevasCartas];
                        const puntuacionActual = calcularConteo(manoActual);
                        if (puntuacionActual > 21) {
                            Alert.alert("Te has pasado de 21, has perdido");
                            reiniciarJuego();
                        }
                    }} />
                    <Button title='Plantarse' onPress={async () => {
                        calcularConteo(misCartas) > calcularConteo(cartasBanco) ? Alert.alert("Has ganado") : Alert.alert("Ha ganado el banco")
                        setTimeout(() => {
                            reiniciarJuego()
                        }, 2000);

                    }} />
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 10 }}>
                    {misCartas.map((item, index) => (
                        <Image key={index} source={{ uri: item.image }} style={{ height: 140, width: 100, margin: 2 }} />
                    ))}
                </View>
            </View>
            <View style={{ backgroundColor: "lightblue", flex: 1, alignItems: "center", padding: 10 }}>
                <Text>
                    Bank Total: {calcularConteo(cartasBanco)}
                </Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {cartasBanco.map((item, index) => (
                        <Image key={index} source={{ uri: index == 0 ? urlDetras : item.image }} style={{ height: 140, width: 100, margin: 2 }} />
                    ))}
                </View>
            </View>
        </View>
    )
}

export default index