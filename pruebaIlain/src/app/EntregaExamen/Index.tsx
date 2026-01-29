import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

export default function IndexEntrega() {
  const router = useRouter()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
      <Button
        title="Lista Tareas"
        onPress={() =>
          router.push('/EntregaExamen/ActividadListaTarea/ListaTarea')
        }
      />
      <Button
        title="Blackjack"
        onPress={() =>
          router.push('/EntregaExamen/Blackjack/Blackjack')
        }
      />
      <Button
        title="Acertar Numero"
        onPress={() =>
          router.push('/EntregaExamen/acertarNumero/JuegoAcertarNumeros')
        }
      />
    </View>
  )
}
