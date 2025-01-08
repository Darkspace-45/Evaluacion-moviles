import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function WelcomeScreen( { navigation } : any) {
    return (
        <View>
            <Text style={styles.title}>BIENVENIDO!!</Text>
            <Image source={require('../assets/img/como.png')}
            style={styles.img}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                <Text style={styles.text}>INGRESAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: 120
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        textDecorationLine: 'underline'
    }
})