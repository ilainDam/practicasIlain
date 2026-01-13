import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
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
    let urlDetras="https://deckofcardsapi.com/static/img/back.png";
    let url="https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const [deckId, setDeckId] = useState("")
    const [misCartas, setMisCartas] = useState<Card[]>([])
    //
    async function iniciarID() {
        let respuesta = await axios.get(url)
        setDeckId(respuesta.data.deck_id as string)
        return respuesta.data.deck_id;
    }
    async function sacarCartas(iddeck : string, cantidad: number) {
        let cartas = await axios.get(`https://deckofcardsapi.com/api/deck/${iddeck}/draw/?count=${cantidad}`)
        return cartas.data;
    }
    function añadirJugador(cartas : Card[]) {
        cartas.map((item,index)=>{
            setMisCartas([...misCartas,item])
        })
    }



    useEffect(() => {
        let mico = async () => {
            let id = await iniciarID()
            
            await sacarCartas(id,2);
        }
        mico();

    }, [])
    //
    return (
        <View className='main' style={{ flex: 1, justifyContent: "center" }}>
            <View className='Player' style={{ backgroundColor: "lightpink", flex: 1, alignItems: "center", padding: 10 }}>
                <Text>
                    ID: {deckId}
                </Text>
                <Text>
                    Player
                </Text>
                <Button title='Sacar carta' />
            </View>
            <View className='Bank' style={{ backgroundColor: "lightblue", flex: 1, alignItems: "center", padding: 10 }}>
                <Text>
                    Bank
                </Text>
            </View>
        </View>

    )
}

export default index