import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Button,
    ScrollView,
    TouchableOpacity,
    MaterialCommunityIcons,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import { Cardkelas } from '../../components/atomics';

export default function Desc({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading1}>Keterangan Kelas</Text>
            <Text style={styles.deskripsi}>
                Deskripsi singkat inventaris kelas.
            </Text>
            <View style={styles.card}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/kelas.jpg')}
                />
                <Text style={styles.name}>Lokasi Kelas: A1.1</Text>
                <Text style={styles.name}>Dihuni Kelas: XII RPL 1</Text>
                <Text style={styles.name}>Jumlah Papan Tulis: 1</Text>
                <Text style={styles.name}>Jumlah Kursi: 64</Text>
                <Text style={styles.name}>Jumlah Meja: 32</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.buttonText}>Kembali</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#FFFFFF',
        // alignItems:"center",
        // justifyContent:"center",
        // marginBottom: 50,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    deskripsi: {
        paddingTop: 10,
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 20,
    },
    avatar: {
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 0,
        width: 280,
        height: 180,
    },
    heading1: {
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'center',
        // alignContent: 'center',
        fontSize: 36,
        marginTop: 100,
    },
    heading2: {
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 20,
        marginTop: 15,
    },
    subheading3: {
        color: 'grey',
        fontWeight: 'light',
        fontSize: 14,
        marginTop: 10
    },
    card: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        alignItems: 'flex-start',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 8,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        marginTop: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
