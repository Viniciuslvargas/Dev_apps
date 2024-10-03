import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.profileImage} source={require('./image.png')} />
        <Text style={styles.nameText}>Vinicius Lopes Vargas</Text>
        <Text style={styles.infoText}>Data de Nascimento: 31/12/2006</Text>
        <Text style={styles.infoText}>Time: Figueirense kk</Text>

        <View style={styles.buttonsContainer}>
          <Link href="./Musicas" style={styles.buttonLink} asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Músicas Favoritas</Text>
            </TouchableOpacity>
          </Link>
          <Link href="./Filmes" style={styles.buttonLink} asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Filmes Favoritos</Text>
            </TouchableOpacity>
          </Link>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray', 
  },
  card: {
    width: '90%',
    maxWidth: 350,
    padding: 20,
    backgroundColor: '#ffffff', 
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, 
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green', 
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#004d40', 
    marginBottom: 8,
  },
  buttonsContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonLink: {
    width: '100%', 
    alignItems: 'center',
    marginBottom: 10, // Espaçamento entre os botões
  },
  button: {
    backgroundColor: 'green', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    width: '80%', 
    alignItems: 'center',
    justifyContent: 'center', 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  
});

export default App;
