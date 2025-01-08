import { ref, update, remove } from 'firebase/database';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { db } from '../config/Config';

const Screen3 = () => {
    const [id, setId] = useState('');
    const [nuevosDatos, setNuevosDatos] = useState({
        fechapedido: '',
        email: '',
        mensaje: '',
    });

    const editarRegistro = () => {
        if (!id) {
            Alert.alert('Error', 'Por favor, ingrese el ID del registro');
            return;
        }

        // Actualizar la base de datos con los nuevos datos
        update(ref(db, 'orden/' + id), nuevosDatos)
            .then(() => Alert.alert('Éxito', 'El registro ha sido actualizado'))
            .catch((error) => Alert.alert('Error', error.message));
    };

    const eliminarRegistro = () => {
        Alert.alert('Confirmación', '¿Está seguro de que desea eliminar este registro?', [
            { text: 'Cancelar', style: 'cancel' },
            {
                text: 'Eliminar',
                onPress: () => {
                    remove(ref(db, 'orden/' + id))
                        .then(() => Alert.alert('Éxito', 'El registro ha sido eliminado'))
                        .catch((error) => Alert.alert('Error', error.message));
                },
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar o Eliminar Registro</Text>

            <TextInput
                style={styles.input}
                placeholder="Ingrese el ID"
                value={id}
                onChangeText={(text) => setId(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Nueva Fecha de Pedido"
                value={nuevosDatos.fechapedido}
                onChangeText={(text) => setNuevosDatos({ ...nuevosDatos, fechapedido: text })}
            />

            <TextInput
                style={styles.input}
                placeholder="Nuevo Correo Electrónico"
                value={nuevosDatos.email}
                onChangeText={(text) => setNuevosDatos({ ...nuevosDatos, email: text })}
            />

            <TextInput
                style={styles.input}
                placeholder="Nuevo Mensaje"
                value={nuevosDatos.mensaje}
                onChangeText={(text) => setNuevosDatos({ ...nuevosDatos, mensaje: text })}
            />

            <TouchableOpacity style={styles.button} onPress={editarRegistro}>
                <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={eliminarRegistro}>
                <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>
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
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        width: '100%',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    deleteButton: {
        backgroundColor: '#FF0000',
    },
});

export default Screen3;
