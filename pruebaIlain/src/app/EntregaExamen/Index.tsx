import { View, Button } from 'react-native'
import { useRouter } from 'expo-router'

export default function IndexEntrega() {
  const router = useRouter()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',gap:10 }}>
      <Button
        title="Lista tareas"
        onPress={() =>
          router.push('/EntregaExamen/ActividadListaTarea/ListaTarea')
        }
      />
      <Button
        title="Juegos"
        onPress={() =>
          router.push('/EntregaExamen/Blackjack/Blackjack')
        }
      />
    </View>
  )
}
