import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Usuarios from './UsuarioStack';
import Perfil from './PerfilStack';

const Stack = createStackNavigator();

export default function Navigation(){
    return(
        <Stack.Navigator tabBarOptions={{activeBackgroundColor:"#55BF00", inactiveBackgroundColor:"#15212b"}}>
            <Stack.Screen 
                name='usuario'
                component={Usuarios} 
                options={{title:"Usuarios"}}>
            </Stack.Screen>
            <Stack.Screen 
                name='perfil'
                component={Perfil}
                options={{title:"Perfil"}} >
            </Stack.Screen>
        </Stack.Navigator>
    );
}