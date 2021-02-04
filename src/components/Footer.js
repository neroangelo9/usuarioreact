import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spinner from './Spinner';

export default function Footer(props){
    return(
            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log("Spinner")}>
                <Text style={styles.text}> Cerrar Sesion </Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold',
        fontSize:18,
        color:'white',
        textAlign:'center'
    },
    button:{
        backgroundColor:"#2874A6",
        borderRadius:20,
        width:"75%",
    }
});