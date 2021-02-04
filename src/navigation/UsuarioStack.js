import React, {useState, useEffect} from "react";
import { getInfoUsuarios } from '../info/informacion';
import {StyleSheet, ScrollView, View, TextInput, TouchableWithoutFeedback, Text, TouchableOpacity} from 'react-native';
import { map, size } from 'lodash';

export default function HomeStack(props){
    const { navigation } = props;
    const [usuario, setUsuario] = useState(null);
    const [page, setPage] = useState(1);
    const [flagadd, setflagAdd] = useState(false);
    const [usuarioadd, setUsuarioAdd] = useState(null);
    console.log(usuario);

    useEffect(() => {
        if(flagadd){
            setUsuario([...usuario, usuarioadd])
            setflagAdd(false)
        }
        else{
            if(page <= 2){
                getInfoUsuarios(page)
                .then((response) => {
                if(!usuario){
                    setUsuario(response.data)
                    setPage(page + 1)
                }
                else{
                    setUsuario([...usuario, ...response.data])
                    setPage(page + 1)
                }
                });
            }
        }
    },[page]);

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.container}>
            {map(usuario, (usuar, index) => (
                    <Users key={index} data={usuar} navigation={navigation}></Users>
                ))}
                <AddUsers navigation={navigation} setUsuario={setUsuario} count={size(usuario)} 
                          setUsuarioAdd={setUsuarioAdd} setflagAdd={setflagAdd} setPage={setPage} page={page}></AddUsers>
            </View>
        </ScrollView>
        );
}

function Users(props){
    const{data, navigation} = props;
    const{id, first_name, last_name} = data;
    const goPerfil = () => {
        navigation.navigate('perfil', {data, name, apell});
    };
    const [name, setName] = useState(null);    
    const [apell, setApell] = useState(null);
    const [show, setShow] = useState(true);

    useEffect(() => {
        setApell(last_name)
    },[]);

    useEffect(() => {
        setName(first_name)
    },[]);
    
    useEffect(() => {
        console.log(show)
    },[show]);

    return(
        <> 
        { show && (
        <TouchableWithoutFeedback onPress={goPerfil}>
            <View style={style.viewBack}>         
                <View style={style.viewID}>
                    <Text>ID: {id}</Text>
                </View>
                <View style={style.viewUser}>
                    <View style={style.viewRow}>
                        <Text>Nombre: </Text>
                        <TextInput value={name} 
                                   style={style.input}                                   
                                   onChange={(e) => setName(e.nativeEvent.text)}>
                        </TextInput>
                    </View>
                    <View style={style.viewRow}>
                        <Text>Apellido: </Text>
                        <TextInput value={apell} 
                                   style={style.input}
                                   onChange={(e) => setApell(e.nativeEvent.text)}
                        ></TextInput>
                    </View>                
                </View>
                <View style={style.viewID}>
                    <TouchableOpacity onPress={() => setShow(false)}>
                        <Text style={style.addButton}>  Eliminar  </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>)}
        </>            
);
}

function AddUsers(props){
    const{navigation, setUsuario, count, setUsuarioAdd, setflagAdd, setPage, page} = props;
    const[ error, setError] = useState({});
    const [addname, setAddName] = useState(null);    
    const [addapell, setAddApell] = useState(null);
    const [addcorreo, setAddCorreo] = useState(null);

    const onSubmit = () => {
        let errors = {};
        if(!addname || !addapell || !addcorreo){
            if(!addname) errors.addname = true;
            if(!addapell) errors.addapell = true;
            if(!addcorreo) errors.addcorreo = true;
        }else{
            setUsuarioAdd({avatar:'', email:addcorreo, first_name: addname, last_name: addapell, id: count + 1 })
            setflagAdd(true)
            setPage(page + 1)
        }
        setError(errors);
    };

    return(
        <TouchableWithoutFeedback >
            <View style={style.viewBack}>
                <View style={style.viewUser}>
                    <View style={style.viewRow}>
                        <Text>Nombre: </Text>
                        <TextInput style={[style.inputadd, error.addname ? {borderColor: "#940c0c", borderWidth: 4} : {borderColor:'gray',  borderWidth: 1}]}
                                   onChange={(e) => setAddName(e.nativeEvent.text)}>
                        </TextInput>
                    </View>
                    <View style={style.viewRow}>
                        <Text>Apellido: </Text>
                        <TextInput style={[style.input, error.addapell ? {borderColor: "#940c0c", borderWidth: 4} : {borderColor:'gray', borderWidth: 1}]}
                                   onChange={(e) => setAddApell(e.nativeEvent.text)}
                        ></TextInput>
                    </View>
                    <View style={style.viewRow}>
                        <Text>Email:      </Text>
                        <TextInput style={[style.input, error.addcorreo ? {borderColor: "#940c0c", borderWidth: 4} : {borderColor:'gray', borderWidth: 1}]}
                                   onChange={(e) => setAddCorreo(e.nativeEvent.text)}
                        ></TextInput>
                    </View>             
                </View>
                <View style={style.viewID}>
                    <TouchableOpacity onPress={onSubmit}>
                        <Text style={style.MoreButton}>  Agregar  </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
);
}

const style = StyleSheet.create({
    input:{
        height:40,
        borderColor:'gray',
        borderWidth: 1,
        borderRadius:5,
        width:"80%"
    },
    viewUser:{
        marginLeft:20,
        marginBottom:20,
        flexDirection:'column',
        alignItems:'center',
        marginRight:20,
        borderRadius:10,
    },
    viewBack:{
        marginLeft:20,
        marginBottom:10,
        marginRight:20,
        borderRadius:10,
        backgroundColor:'#C9EEFF',
    },
    viewRow:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3
    },
    viewID:{
        flexDirection:'row',
        alignItems:'flex-start',
        marginLeft:20
    },
    container:{
        flex:1,
        flexDirection:'column',
        marginVertical:20
    },
    addButton:{
        fontSize:18,
        color:"white",
        backgroundColor:"red",
        borderRadius:10
    },
    MoreButton:{
        fontSize:18,
        color:"white",
        backgroundColor:"#0DEC02",
        borderRadius:10
    },
    inputadd:{
        height:40,
        borderRadius:5,
        width:"80%"
    },
})