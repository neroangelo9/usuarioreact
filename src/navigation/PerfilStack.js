import React from "react";
import {ScrollView, View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import noImage from  '../assets/png/imgdefault.png';
import Footer from '../components/Footer';
import { size } from 'lodash';

const {width} = Dimensions.get("window");

export default function PerfilStack(props){
    const {navigation, route} = props;
    const{ params } = route;
    const{ data, name, apell } = params;
    const{ avatar, email, first_name, id, last_name } = data;

    return(<ScrollView>
            <View style={style.viewBack}>
                <View style={style.container}>
                    <View >
                    {size(avatar) > 0 ? (<Image source={{uri:avatar}}
                                style={style.image} ></Image>) 
                    : (<Image source={{source:noImage}}
                        style={style.image}></Image>)}
                    </View>
                    <View style={style.viewRow}>
                            <Text>ID: {id}</Text>
                    </View>
                    <View style={style.viewRow}>
                            <Text>Nombre: {name}</Text>
                    </View>
                    <View style={style.viewRow}>
                            <Text>Apellido: {apell}</Text>
                    </View>
                    <View style={style.viewRow}>
                            <Text>Email: {email}</Text>
                    </View>
                </View>
                <View style={{ alignItems:'center'}}>
                    <Footer></Footer>
                </View>
            </View>
    </ScrollView>);
}

const style = StyleSheet.create({
    viewBack:{
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        borderRadius:10,
        backgroundColor:'#C9EEFF',
        width:'90%',
        height:width ,
    },
    image:{
        width:100,
        height:180,
        borderRadius:20,
        marginBottom:10
    },
    container:{
        flex:1,
        flexDirection:'column',
        marginTop:20,
        alignItems:'center'
    },
    viewRow:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        borderColor:'gray',
        borderWidth: 1,
        borderRadius:5,
        width:"80%",
        justifyContent:'center'
    },
});