import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Informacion = ({ registro } : any) => {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.title}>Información del Registro</Text>
            <Text><strong>Número de Orden:</strong> {registro.orden}</Text>
            <Text><strong>Fecha del Pedido:</strong> {registro.fechapedido}</Text>
            <Text><strong>Correo:</strong> {registro.email}</Text>
            <Text><strong>Detalles:</strong> {registro.mensaje}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default Informacion;
