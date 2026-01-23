import { Stack } from "expo-router"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AppContextProvider from "../context/AppContextProvider"

export default function AppConfigLayout() {
  return (
    <AppContextProvider>
      <SafeAreaView  style={{flex:1}}>
        <Stack
            screenOptions={{
                headerTitleAlign:'center',
                headerStyle: {
                    backgroundColor : "#3461eb",
                }
            }}
        />
      </SafeAreaView>
    </AppContextProvider>
  )
}

const styles = StyleSheet.create({})