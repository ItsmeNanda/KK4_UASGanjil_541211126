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

export default function Portofolio({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.center}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/sekolah.jpg')}
                />
            </View>
            <Text style={styles.heading2}>Selamat Datang Di Ruangin</Text>
            <Text style={styles.deskripsi}>
                Cari data ruangan yang ingin anda cari.
            </Text>
            <TouchableOpacity style={styles.tam} onPress={() => navigation.navigate('Tambah')}>
                <Text style={styles.tamText}>Tambah Data</Text>
            </TouchableOpacity>
            {/* <LoginButton title='Tambah Data' /> */}
            <Cardkelas kelas='XII RPL 1' ruangan='Ruangan Kelas A1.1' onpress={() => navigation.navigate('Desc')} />
            <Cardkelas kelas='XII RPL 2' ruangan='Ruangan Kelas A1.2' />
            <Cardkelas kelas='XII RPL 3' ruangan='Ruangan Kelas A1.3' />
            <Cardkelas kelas='XII RPL 4' ruangan='Ruangan Kelas A1.4' />
            <Cardkelas kelas='XII RPL 5' ruangan='Ruangan Kelas A1.5' />
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
        marginBottom: 0,
        marginTop: 10,
        width: 320,
        height: 180,
    },
    heading1: {
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'center',
        // alignContent: 'center',
        fontSize: 36,
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
    tam: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        alignItems: 'center',
    },
    tamText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
