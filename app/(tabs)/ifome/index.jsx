import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

// Importando a imagem de fundo
const backgroundImage = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSkbNzv2G5K628LcX-_UI7W3Wtq0Vls31jg&s' };

// Importando imagens (substitua com o caminho correto)
const imagemHamburguer = require('./hamburguer.png');
const imagemPizza = require('./pizza.png');
const imagemCachorroQuente = require('./cachorroquente.png');
const imagemSanduicheNatural = require('./sanduiche-natural.png');

// Tela de Lanches
const LanchesScreen = ({ adicionarAoCarrinho }) => {
  const lanches = [
    { id: '1', nome: 'Hambúrguer', preco: 9.00, imagem: imagemHamburguer },
    { id: '2', nome: 'Pizza', preco: 17.00, imagem: imagemPizza },
    { id: '3', nome: 'Cachorro-Quente', preco: 5.00, imagem: imagemCachorroQuente },
    { id: '4', nome: 'Sanduíche Natural', preco: 8.00, imagem: imagemSanduicheNatural },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.imagem} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.texto}>{item.nome} - R${item.preco.toFixed(2)}</Text>
        <TouchableOpacity style={styles.button} onPress={() => adicionarAoCarrinho(item)}>
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Selecione seu lanche</Text>
      <FlatList
        data={lanches}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// Tela do Carrinho
const CarrinhoScreen = ({ carrinho, removerDoCarrinho, voltar, setMensagem }) => {
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco, 0);
  };

  const realizarCompra = () => {
    if (carrinho.length === 0) {
      setMensagem('Adicione itens ao carrinho antes de comprar.');
      return;
    }

    const total = calcularTotal();
    setMensagem(`Compra realizada com sucesso! Total: R$${total.toFixed(2)}`);

    // Limpa o carrinho após a compra
    removerDoCarrinho(null); // Passando null como ID
    voltar(); // Retorna à tela de lanches
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.texto}>{item.nome} - R${item.preco.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={() => removerDoCarrinho(item.id)}>
        <Text style={styles.buttonText}>Remover do Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrinho de Compras</Text>
      {carrinho.length > 0 ? (
        <>
          <FlatList
            data={carrinho}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity style={styles.buyButton} onPress={realizarCompra}>
            <Text style={styles.buyButtonText}>Comprar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.empty}>O carrinho está vazio.</Text>
      )}
      <TouchableOpacity style={styles.backButton} onPress={voltar}>
        <Text style={styles.backButtonText}>Voltar para Lanches</Text>
      </TouchableOpacity>
    </View>
  );
};

// Componente principal
const App = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [telaAtual, setTelaAtual] = useState('lanches');
  const [mensagem, setMensagem] = useState('');

  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
    setMensagem('Item adicionado ao carrinho!');
  };

  const removerDoCarrinho = (id) => {
    if (id === null) {
      setCarrinho([]); // Limpa o carrinho se id for null
    } else {
      setCarrinho(carrinho.filter(item => item.id !== id));
    }
  };

  const voltar = () => {
    setTelaAtual('lanches');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.appContainer}>
        {telaAtual === 'lanches' ? (
          <>
            <LanchesScreen adicionarAoCarrinho={adicionarAoCarrinho} />
            <TouchableOpacity style={styles.cartButton} onPress={() => setTelaAtual('carrinho')}>
              <Text style={styles.cartButtonText}>Ver Carrinho</Text>
            </TouchableOpacity>
          </>
        ) : (
          <CarrinhoScreen
            carrinho={carrinho}
            removerDoCarrinho={removerDoCarrinho}
            voltar={voltar}
            setMensagem={setMensagem}
          />
        )}
        {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Para cobrir toda a tela
  },
  appContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo branco com transparência
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#e7f1ff',
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
    textAlign: 'center',
  },
  empty: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
  mensagem: {
    marginTop: 20,
    fontSize: 18,
    color: '#28a745',
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buyButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
  },
  backButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  backButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
  },
  cartButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  cartButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default App;
