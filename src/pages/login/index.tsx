import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { style } from "./styles";
import logo from '../../assets/logo.png';
import { RootStackParamList } from "../../navigation/AppNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function getLogin() {
    if (!email || !password) {
      return Alert.alert('Atenção', 'Informe os Campos Obrigatórios');
    }
    // Simula login bem-sucedido e navega para a Home
    console.log('Logado com Sucesso');
    navigation.navigate('Home');
  }

  function handleForgotPassword() {
    Alert.alert(
      'Redefinir Senha',
      'Instruções para redefinir a senha serão enviadas para seu e-mail.'
    );
    // Se desejar, pode navegar para outra tela aqui: navigation.navigate('ForgotPassword')
  }

  return (
    <View style={style.container}>
      {/* topo */}
      <View style={style.boxTop}>
        <Image source={logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Bem Vindo</Text>
      </View>

      {/* meio */}
      <View style={style.boxMid}>
        <Text style={style.titleInput}>ENDEREÇO DE EMAIL:</Text>
        <View style={style.BoxInput}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Text style={style.titleInput}>SENHA:</Text>
        <View style={style.BoxInput}>
          <TextInput
            style={style.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />
        </View>
      </View>

      {/* botão */}
      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button} onPress={getLogin}>
          <Text>ENTRAR</Text>
        </TouchableOpacity>

        {/* Botão para redefinir senha */}
        <TouchableOpacity
          onPress={handleForgotPassword}
          style={{ marginTop: 15 }}
        >
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </View>

      {/* rodapé */}
      <Text style={style.textBottom}>
        Não tem uma conta?{' '}
        <Text
          style={style.textBottomCreate}
          onPress={() => navigation.navigate('Cadastro')}
        >
          Crie agora
        </Text>
      </Text>
    </View>
  );
}
