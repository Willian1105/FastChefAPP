import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../../navigation/AppNavigator";
import { style } from "./styles";
import logo from '../../assets/logo.png';
import { supabase } from '../../../supabase'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<NavigationProp>();

  const [ingredientes, setIngredientes] = useState('');
  const [receita, setReceita] = useState('');

  // 🔁 Busca receitas no Supabase conforme os ingredientes informados
  async function buscarReceita() {
    if (!ingredientes.trim()) {
      Alert.alert('Atenção', 'Por favor, digite algum ingrediente.');
      return;
    }

    const termos = ingredientes
      .toLowerCase()
      .split(',')
      .map(i => i.trim());

    const { data, error } = await supabase
      .from('receitas')
      .select('*');

    if (error) {
      console.error('Erro ao buscar receitas:', error.message);
      Alert.alert('Erro', 'Não foi possível buscar receitas.');
      return;
    }

    const receitaEncontrada = data?.find(r =>
      r.ingredientes.some((ing: string) =>
        termos.includes(ing.toLowerCase())
      )
    );

    if (receitaEncontrada) {
      setReceita(`${receitaEncontrada.titulo}: ${receitaEncontrada.descricao}`);
    } else {
      setReceita('Desculpe, não encontrei uma receita para esses ingredientes.');
    }
  }

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Erro ao sair:', error.message);
      Alert.alert('Erro', 'Não foi possível sair da conta.');
      return;
    }

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
