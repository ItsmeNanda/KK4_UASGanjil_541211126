import { Text, View, StyleSheet, TextInput, Props, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

function Cardkelas({ kelas, onpress, ruangan }) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{ruangan}</Text>
            <Text style={styles.name}>{kelas}</Text>
            <TouchableOpacity style={styles.button} onPress={onpress}>
                <Text style={styles.buttonText}>Lihat Data</Text>
            </TouchableOpacity>
        </View>

    );
}

export { Cardkelas }

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        marginTop: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 5,
        marginTop: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});
