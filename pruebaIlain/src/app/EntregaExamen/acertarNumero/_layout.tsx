import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
    return (
                <Stack>
                    <Stack.Screen name="Index" options={{ title: "Login" }} />
                    <Stack.Screen name="JuegoAcertarNumero" options={{ title: "Juego de acertar numero" }} />
                    <Stack.Screen name="Historico" options={{ title: "Historico" }} />
                </Stack>
    );
};


export default _layout;