import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { db } from '../config/Config';
import { ref, get } from 'firebase/database';
import Informacion from '../screens/Informacion';

const Screen2 = () => {
    const [idBusqueda, setIdBusqueda] = useState('');
    const [registro, setRegistro] = useState(null);
    const [registros, setRegistros] = useState<Registro[]>([]);

    type Registro = {
        id: string;
        orden: string;
        fechapedido: string;
        email: string;
        mensaje: string;
    };

    useEffect(() => {
        get(ref(db, 'orden/')).then((snapshot) => {
            const data = snapshot.val();
            const registrosArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
            }));
            setRegistros(registrosArray);
        });
    }, []);

    const buscarRegistro = () => {
        if (idBusqueda) {
            get(ref(db, 'orden/' + idBusqueda)).then((snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setRegistro({ id: idBusqueda, ...data });
                } else {
                    Alert.alert('Error', 'Registro no encontrado');
                }
            });
        } else {
            Alert.alert('Error', 'Ingrese un ID válido');
        }
    };

    const renderItem = ({ item }: any) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                Alert.alert('Más información', `Detalles de la orden: ${item.mensaje}, fecha de compra: ${item.fechapedido}`);
            }}
        >
            <Text style={styles.itemText}>{item.orden}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    placeholder="Buscar por ID"
                    value={idBusqueda}
                    onChangeText={(text) => setIdBusqueda(text)}
                />
                <TouchableOpacity style={styles.button} onPress={buscarRegistro}>
                    <Text style={styles.buttonText}>Buscar</Text>
                </TouchableOpacity>
            </View>

            {registro && <Informacion registro={registro} />}

            <FlatList
                data={registros}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<Text style={styles.title}>Lista de Órdenes</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    searchSection: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#1b263b',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    item: {
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default Screen2;
