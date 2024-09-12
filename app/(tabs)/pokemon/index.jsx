// import React, {useState, useEffect} from "react";
// import {View, Text, StyleSheet } from "react-native";
// import {Picker} from '@react-native-picker/picker';

// const styles = StyleSheet.create({
//   container:{

//   }
// });

// export default Seletor = () => {
//     const [pokemon, setPokemon] = useState([]);
//     const [lista_pokemons, setListaPokemons] = useState([]);
//     useEffect(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
//       .then((response => response.json()))
//       .then(dados => setListaPokemons(dados.result))
//     }, [])
//     // const lista_pokemons = [
//     //   { nome: 'Pikachu', value: 'pikachu'},
//     //   { nome: 'Bubassauro', value: 'bubassauro'},
//     //   { nome: 'Charmander', value: 'charmander'},
//     //   { nome: 'Squirtle', value: 'Squirtle'},
//     // ];

//     return (
//         <View style={styles.container}>
//           <Text style={styles.title}>Selecione um Pokémon</Text>
//           <Picker
//             selectedValue={pokemon}
//             style={styles.picker}
//             onValueChange={(itemValue) => setPokemon(itemValue)}
//             >
//               <Picker.Item label="selecione um Pokemon"/>
//               {lista_pokemons.map((item, index) => (
//                 <Picker.Item key={index} label={item.name} url={item.url}/>
//               ))}
//           </Picker>
//         </View>
//     )
// }