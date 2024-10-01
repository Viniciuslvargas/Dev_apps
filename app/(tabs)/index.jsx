import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha o projeto</Text>
      <View style={styles.button}>
        <Link href="./telaregistro" asChild>
          <Button title="Registrar" />
        </Link>
      </View>
      <View style={styles.button}>
        <Link href="./banco" asChild>
          <Button title="Banco" />
        </Link>
      </View>
      <View style={styles.button}>
        <Link href="./calculadora" asChild>
        <Button title="Calculadora" />
        </Link>
      </View>
      <View style={styles.button}>
        <Link href="./gradient" asChild>
        <Button title="Gradient" />
        </Link>
      </View>
      <View style={styles.button}>
        <Link href="./lista" asChild>
        <Button title="Lista" />
        </Link>
      </View>
      <View style={styles.button}>
        <Link href="./pokemon" asChild>
        <Button title="Pokemon" />
        </Link>
      </View>
      <View style={styles.button}>
        <Link href="./sobremim" asChild>
          <Button title="sobre mim" />
        </Link>
      </View>
      <View style={styles.button}>
        <Link href="./ifome" asChild>
          <Button title="IFOME" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 120,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  button: {
    marginVertical: 10,
  },
  titulo: {
    textAlign: 'center',

  }
});
