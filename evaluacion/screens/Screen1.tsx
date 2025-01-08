import { ref, set } from 'firebase/database';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { db } from '../config/Config';

const Screen1 = () => {
    const [orden, setOrden] = useState('');
    const [fechapedido, setFechapedido] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const guardar = () => {
        set(ref(db, 'orden/' + orden), {
            orden: orden,
            fechapedido: fechapedido,
            email: email,
            mensaje: mensaje
        });
        limpiar();
        Alert.alert('Registro Exitoso','Los datos se han guardado correctamente');
    };

    function limpiar() {
        setOrden('');
        setFechapedido('');
        setEmail('');
        setMensaje('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Compra</Text>
            <View style={styles.form}>
                <Text style={styles.text}>Número de Orden:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese el número de orden"
                    value={orden}
                    onChangeText={(text) => setOrden(text)}
                />
                <Text style={styles.text}>Fecha del Pedido:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese la fecha del pedido"
                    value={fechapedido}
                    onChangeText={(text) => setFechapedido(text)}
                />
                <Text style={styles.text}>Correo:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese el correo usado en la compra"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.text}>Detalles de la compra:</Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="Descripción"
                    value={mensaje}
                    onChangeText={(text) => setMensaje(text)}
                    multiline={true}
                    numberOfLines={4}
                />
                <TouchableOpacity style={styles.button} onPress={guardar}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
    form: {
        width: '100%',
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    textArea: {
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1b263b',
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text:{
        fontSize: 12
    }
});

export default Screen1;