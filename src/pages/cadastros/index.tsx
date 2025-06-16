import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../navigation/AppNavigator';
import { style } from './styles';
import { supabase } from '../../../supabase'; // 👈 importa o cliente supabase

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cadastro'>;

export default function Cadastro() {
  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleRegister() {
    if (!email || !password || !confirmPassword) {
      return Alert.alert('Atenção', 'Preencha todos os campos!');
    }

    if (password !== confirmPassword) {
      return Alert.alert('Erro', 'As senhas não coincidem!');
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Erro ao cadastrar:', error.message);
      return Alert.alert('Erro no cadastro', error.message);
    }

    console.log('Usuário cadastrado:', data);

    Alert.alert(
      'Cadastro realizado!',
      'Verifique seu e-mail para confirmar o cadastro.'
    );

    navigation.navigate('Login');
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Text style={style.text}>Crie sua Conta</Text>
      </View>

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

        <Text style={style.titleInput}>CONFIRMAR SENHA:</Text>
        <View style={style.BoxInput}>
          <TextInput
            style={style.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirme sua senha"
            secureTextEntry={true}
          />
        </View>
      </View>

      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button} onPress={handleRegister}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={style.textBottom}>Já tem uma conta? <Text style={style.textBottomCreate}>Entrar</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
