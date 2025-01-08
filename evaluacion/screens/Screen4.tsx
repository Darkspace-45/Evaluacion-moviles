import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

type Ciudad = {
    nombre: string;
    descripcion: string;
    informacion: {
        imagen: string;
    };
}

const Screen4 = () => {
    const [data, setData] = useState<Ciudad[]>([]);

    useEffect(() => {
        fetch('https://jritsqmet.github.io/web-api/ciudades2.json')
            .then((response) => response.json())
            .then((json) => setData(json.ciudades))
            .catch((error) => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Datos desde la API</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.nombre}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.informacion.imagen }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.cityName}>{item.nombre}</Text>
                            <Text style={styles.cityDescription}>{item.descripcion}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    cityName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cityDescription: {
        fontSize: 14,
        color: '#777',
    },
});

export default Screen4;
