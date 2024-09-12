import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    
    <View style={styles.container}>
    <Text style={styles.titulo}>Escolha o projeto</Text>
      <View style={styles.button}>
        <Link href="./telaregistro">
        <Button title="Registrar" onPress={() => {}}/>
        </Link>
      </View>
      <View style={styles.button}>
      <Link href="./banco">
        <Button title="Banco" />
        </Link>
      </View>
      <View style={styles.button}>
        <Button title="Calculadora" />
      </View>
      <View style={styles.button}>
        <Button title="Gradient" />
      </View>
      <View style={styles.button}>
        <Button title="Lista" />
      </View>
      <View style={styles.button}>
        <Button title="Pokemon" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 120,
    justifyContent: 'center',
  },
  button: {
    marginVertical: 10, 
   
    
  },
  titulo:{
    textAlign: 'center',
    
  }
});
