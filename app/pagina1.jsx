import { Text, View, StyleSheet } from 'react-native';

export default function Pagina1() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        página um
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});