import React, { useState } from "react";
import { View, Text, TextInput, Pressable, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default function SignUp() {
    const [email, setEmail] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Registre-se</Text>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                />
            </View>
            <Pressable style={styles.button} onPress={() => alert('Registrado com sucesso!')}>
                <Text style={styles.buttonText}>Registrar</Text>
            </Pressable>
        </SafeAreaView>
    );
}
