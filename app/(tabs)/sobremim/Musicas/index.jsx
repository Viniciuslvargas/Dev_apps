import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';


import oshowtemquecontinuar from './1.png';
import RosaNorte from './2.png';
import TempoPerdido from './3.png';
import Ohchuva from './4.png';
import MeuLugar from './5.png';

const DATA = [
  {
    id: '1',
    title: 'Grupo Revelação - O show tem que continuar',
    url: 'https://www.youtube.com/watch?v=67n2XQ_-c0U',
    image: oshowtemquecontinuar,
  },
  {
    id: '2',
    title: 'Armandinho - Rosa Norte',
    url: 'https://www.youtube.com/watch?v=hxzCrS519BU',
    image: RosaNorte,
  },
  {
    id: '3',
    title: 'Legiao Urbana - Tempo Perdido',
    url: 'https://www.youtube.com/watch?v=YPLQHeUSX2g',
    image: TempoPerdido,
  },
  {
    id: '4',
    title: 'Falamansa - Oh Chuva',
    url: 'https://www.youtube.com/watch?v=Veeu7KSsZ4c',
    image: Ohchuva,
  },
  {
    id: '5',
    title: 'Arlindo Cruz - Meu Lugar',
    url: 'https://www.youtube.com/watch?v=S4rCAcZyToU',
    image: MeuLugar,
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.touchable}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.videoTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Músicas Favoritas</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  touchable: {
    alignItems: 'center', 
  },
  image: {
    width: 100, 
    height: 100, 
    borderRadius: 5,
    marginBottom: 10,
  },
  videoTitle: {
    fontSize: 18,
    color: 'green',
  },
});

export default App;