import { Stack } from "expo-router"
import { StyleSheet } from "react-native"
import AppContextProvider from "../context/AppContextProvider"

export default function AppConfigLayout() {
  return (
    <AppContextProvider>
        <Stack
            screenOptions={{
                headerTitleAlign:'center',
                headerShown:false,
                headerStyle: {
                    backgroundColor : "#3461eb",
                }
            }}
        />
    </AppContextProvider>
  )
}

const styles = StyleSheet.create({})