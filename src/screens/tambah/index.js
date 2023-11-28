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
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import { FormText } from '../../components/atomics'

export default function Tambah({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading1}>Tambah Kelas</Text>
            <Text style={styles.deskripsi}>
                Tambah data kelas dan inventaris kelas.
            </Text>
            <FormText placeholder='Lokasi Kelas' value={username} onChangeText={setUsername} />
            <FormText placeholder='Dihuni Kelas' value={username} onChangeText={setUsername} />
            <FormText placeholder='Jumlah Papan Tulis' value={username} onChangeText={setUsername} />
            <FormText placeholder='Jumlah Kursi' value={username} onChangeText={setUsername} />
            <FormText placeholder='username' value={username} onChangeText={setUsername} />
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.buttonText}>Tambah</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.buttonText}>Kembali</Text>
            </TouchableOpacity>
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
    button2: {
        backgroundColor: 'blue',
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
