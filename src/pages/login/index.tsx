import React from "react";

import {Text, View, Image, TextInput} from 'react-native';

import { style } from "./styles";

import logo from '../../assets/logo.png'

export default function Login (){
    return (
        <View style={style.container}>
         <View style={style.boxTop}>
            <Image
                source={logo}
                style={style.logo}
                resizeMode="contain" />
                <Text style={style.text}> Bem Vindo</Text>
        </View> 

        <View style={style.boxMid}>
            <Text style={style.titleInput}>ENDEREÇO DE EMAIL:</Text>
            <View style={style.BoxInput}>
                <TextInput 
                        style={style.input}
                        />
            </View>
            <TextInput></TextInput>
            <Text style={style.titleInput}>SENHA:</Text>
            <View style={style.BoxInput}>
                <TextInput style={style.input}/>
            </View>
            
            
            <TextInput></TextInput>

        </View>

        <View style={style.boxBottom}> 
            <Text></Text>

        </View>
        </View>
    )
}