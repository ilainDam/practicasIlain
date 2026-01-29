import { Stack } from "expo-router"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AppContextProvider from "../../../context/AppContextProvider"

export default function AppConfigLayout() {
  return (
    <AppContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#3461eb",
            }


          }}
        >
          <Stack.Screen name="ListaTarea" options={{ title: "Lista de tareas" }} />
          <Stack.Screen name="CrearTarea" options={{ title: "Creando Tarea" }} />
        </Stack>
      </SafeAreaView>
    </AppContextProvider>
  )
}

const styles = StyleSheet.create({})