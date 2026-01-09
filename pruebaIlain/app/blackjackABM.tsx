import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
export interface Root {
    success: boolean
    deck_id: string
    cards: Card[]
    remaining: number
}
export interface Card {
    code: string
    image: string
    images: Images
    value: string
    suit: string
}
export interface Images {
    svg: string
    png: string
}
const BlackJack = () => {
    const [mazoId, setMazoId] = useState("");
    const [myCard, setMyCard] = useState<Card>({} as Card);
    useEffect(() => {
        crearMazo();
    }, []);
    async function crearMazo() {
        const apiResponse = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count = 1");
        setMazoId(apiResponse.data.deck_id);
    }
    async function retrieveNCard(deckId: string, desiredCards: number) {
        const URL = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${desiredCards}`;
        const apiResponse = await axios.get(URL);
        return apiResponse.data.cards as Card[];
    }
    return (
        <SafeAreaView>
            <Text>BLACKJACK by Abraham</Text>
            <View className="player-board">
                <Button title={"DAME CARTA"}></Button>
                <Text>Id capturado: {mazoId}</Text>
                <Text>{JSON.stringify(myCard)}</Text>
            </View>
        </SafeAreaView>
    );
};
export default BlackJack;