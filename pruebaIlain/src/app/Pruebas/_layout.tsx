import { drizzle } from "drizzle-orm/expo-sqlite"
import { migrate } from "drizzle-orm/expo-sqlite/migrator"
import { Stack } from "expo-router"
import { SQLiteProvider } from "expo-sqlite"
import React, { Suspense } from 'react'
import { ActivityIndicator, Text, View } from "react-native"
import migrations from "../../../drizzle/migrations"
import AppContextProvider from '../../context/AppContextProvider'
type Props = {}
export const DATABASE_NAME = 'prueba3Drizzle';
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text >Cargando la app...</Text>
    </View>
  );
}
const RootLayout = (props: Props) => {
  return (
    <AppContextProvider>
      <Suspense fallback={<LoadingScreen />}>
        <SQLiteProvider
          databaseName={DATABASE_NAME}
          options={{ enableChangeListener: true }}
          useSuspense
          onInit={async (database) => {
            try {
              console.log("Simulando carga lenta...");
              await sleep(10000); // Espera 10 segundos
              const db = drizzle(database);
              await migrate(db, migrations);
              console.log("Migration success");
            } catch (error) {
              console.error("Migration error", error);
            }
          }}
        >
          <Stack />
        </SQLiteProvider>
      </Suspense>
    </AppContextProvider>
  );
}
export default RootLayout

// export default function AppConfigLayout() {
//   return (
//     <AppContextProvider>
//       <SafeAreaView  style={{flex:1}}>
//         <Stack
//             screenOptions={{
//                 headerTitleAlign:'center',
//                 headerStyle: {
//                     backgroundColor : "#3461eb",
//                 }
//             }}
//         />
//       </SafeAreaView>
//     </AppContextProvider>
//   )
// }

// const styles = StyleSheet.create({})