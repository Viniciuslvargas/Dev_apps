import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';


import Atéoultimohomem from './1.png';
import TropadeElite from './2.png';
import ÀProcuradaFelicidade from './3.png';
import BatmanOCavaleirodasTrevas from './4.png';
import EmRitmodeFuga from './5.png';

const DATA = [
  {
    id: '1',
    title: 'Até o Último Homem - Mel Gibson',
    url: 'https://www.youtube.com/watch?v=s2-1hz1juBI',
    image: Atéoultimohomem,
  },
  {
    id: '2',
    title: 'Tropa de Elite - José Padilha',
    url: 'https://www.youtube.com/watch?v=cb-rUfBTQ1g',
    image: TropadeElite,
  },
  {
    id: '3',
    title: 'À Procurada Felicidade - Gabriele Muccino',
    url: 'https://www.youtube.com/watch?v=DMOBlEcRuw8',
    image: ÀProcuradaFelicidade,
  },
  {
    id: '4',
    title: 'Batman: O Cavaleiro das Trevas - Christopher Nolan',
    url: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    image: BatmanOCavaleirodasTrevas,
  },
  {
    id: '5',
    title: 'Em Ritmo de Fuga - Edgar Wright',
    url: 'https://www.youtube.com/watch?v=zTvJJnoWIPk',
    image: EmRitmodeFuga,
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
    width: 200, 
    height: 320, 
    borderRadius: 5,
    marginBottom: 10,
  },
  videoTitle: {
    fontSize: 18,
    color: 'green',
  },
});

export default App;