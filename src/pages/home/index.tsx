import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../../navigation/AppNavigator";
import { style } from "./styles";
import logo from '../../assets/logo.png';
import { supabase } from '../../../supabase';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<NavigationProp>();

  const [ingredientes, setIngredientes] = useState('');
  const [receitas, setReceitas] = useState<any[]>([]);

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

    const receitasEncontradas = data?.filter(r =>
      r.ingredientes.some((ing: string) =>
        termos.includes(ing.toLowerCase())
      )
    );

    if (receitasEncontradas && receitasEncontradas.length > 0) {
      setReceitas(receitasEncontradas);
    } else {
      setReceitas([]);
      Alert.alert('Nenhuma receita encontrada', 'Desculpe, não encontrei nenhuma receita para esses ingredientes.');
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

      {receitas.length > 0 && (
        <View style={[style.receitaBox, { maxHeight: 300 }]}>
          <Text style={style.receitaTitle}>Receitas sugeridas:</Text>
          <ScrollView>
            {receitas.map((r, index) => (
              <View key={index} style={{ marginBottom: 12 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{r.titulo}</Text>
                <Text style={{ marginBottom: 4 }}>{r.descricao}</Text>
                <Text style={{ fontStyle: 'italic', color: '#666' }}>
                  Ingredientes: {r.ingredientes.join(', ')}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      <TouchableOpacity
        style={[style.buttonYellow, { marginTop: 20 }]}
        onPress={handleLogout}
      >
        <Text style={style.buttonTextBlack}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
