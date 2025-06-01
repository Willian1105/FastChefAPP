import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackParamList } from "../../navigation/AppNavigator";
import { style } from "./styles";
import logo from '../../assets/logo.png';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<NavigationProp>();

  const [ingredientes, setIngredientes] = useState('');
  const [receita, setReceita] = useState('');

  // Receitas estáticas para exemplo
  const receitasMap: { [key: string]: string } = {
    frango: 'Estrogonofe de Frango: frango, creme de leite, ketchup, cebola.',
    arroz: 'Arroz à grega: arroz, ervilha, cenoura, milho.',
    tomate: 'Salada de Tomate: tomate, azeite, sal, manjericão.',
    default: 'Desculpe, não encontrei uma receita para esses ingredientes.',
  };

  function buscarReceita() {
    if (!ingredientes.trim()) {
      Alert.alert('Atenção', 'Por favor, digite algum ingrediente.');
      return;
    }

    const texto = ingredientes.toLowerCase();

    if (texto.includes('frango')) {
      setReceita(receitasMap.frango);
    } else if (texto.includes('arroz')) {
      setReceita(receitasMap.arroz);
    } else if (texto.includes('tomate')) {
      setReceita(receitasMap.tomate);
    } else {
      setReceita(receitasMap.default);
    }
  }

  function handleLogout() {
    // Aqui você pode limpar o estado de login ou tokens, e voltar para a tela de Login
    navigation.navigate('Login');
  }

  return (
    <View style={style.container}>
      <Image source={logo} style={style.logo} resizeMode="contain" />
      <Text style={style.title}>Receitas rápidas e práticas para facilitar no seu dia a dia</Text>

      <Text style={style.label}>Digite os ingredientes que você tem:</Text>
      <TextInput
        style={style.input}
        placeholder="ex: frango, arroz, tomate"
        value={ingredientes}
        onChangeText={setIngredientes}
      />

      <TouchableOpacity style={style.buttonYellow} onPress={buscarReceita}>
        <Text style={style.buttonTextBlack}>Buscar Receita</Text>
      </TouchableOpacity>

      {receita ? (
        <View style={style.receitaBox}>
          <Text style={style.receitaTitle}>Receita sugerida:</Text>
          <Text style={style.receitaText}>{receita}</Text>
        </View>
      ) : null}

      <TouchableOpacity
        style={[style.buttonYellow, { marginTop: 20 }]}
        onPress={handleLogout}
      >
        <Text style={style.buttonTextBlack}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
