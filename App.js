import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
 
export default function App() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dadosEnviados, setDadosEnviados] = useState(null);
 
  useEffect(() => {
    console.log('Aplicativo iniciado com sucesso!');
  }, []);
 
  const handleEnviar = () => {
    setDadosEnviados({ nome, curso, disciplina, descricao });
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scroll}>
 
        {/* Ícone de perfil com círculo rosa */}
        <View style={styles.iconContainer}>
          <Ionicons name="person-circle" size={80} color="#e91e8c" />
        </View>
 
        {/* Título rosa */}
        <Text style={styles.titulo}>FORMULÁRIO DE CADASTRO</Text>
 
        {/* Formulário */}
        <View style={styles.formulario}>
 
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#888"
            value={nome}
            onChangeText={setNome}
          />
 
          <Text style={styles.label}>Curso</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu curso"
            placeholderTextColor="#888"
            value={curso}
            onChangeText={setCurso}
          />
 
          <Text style={styles.label}>Disciplina</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a disciplina"
            placeholderTextColor="#888"
            value={disciplina}
            onChangeText={setDisciplina}
          />
 
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={[styles.input, styles.inputMultiline]}
            placeholder="Escreva uma breve apresentação pessoal..."
            placeholderTextColor="#888"
            value={descricao}
            onChangeText={setDescricao}
            multiline
            numberOfLines={4}
          />
 
          {/* Botão usando Button do React Native com cor rosa */}
          <View style={styles.botaoContainer}>
            <Button
              title="ENVIAR"
              onPress={handleEnviar}
              color="#e91e8c"
            />
          </View>
 
        </View>
 
        {/* Exibição dos dados após envio */}
        {dadosEnviados && (
          <View style={styles.resultado}>
            <Text style={styles.resultadoTitulo}>✅ DADOS CADASTRADOS</Text>
 
            <View style={styles.linha}>
              <Text style={styles.campo}>Nome:</Text>
              <Text style={styles.valor}>{dadosEnviados.nome}</Text>
            </View>
 
            <View style={styles.divisor} />
 
            <View style={styles.linha}>
              <Text style={styles.campo}>Curso:</Text>
              <Text style={styles.valor}>{dadosEnviados.curso}</Text>
            </View>
 
            <View style={styles.divisor} />
 
            <View style={styles.linha}>
              <Text style={styles.campo}>Disciplina:</Text>
              <Text style={styles.valor}>{dadosEnviados.disciplina}</Text>
            </View>
 
            <View style={styles.divisor} />
 
            <View style={styles.linha}>
              <Text style={styles.campo}>Descrição:</Text>
              <Text style={styles.valor}>{dadosEnviados.descricao}</Text>
            </View>
          </View>
        )}
 
      </ScrollView>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  scroll: {
    padding: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
 
  /* Ícone de perfil */
  iconContainer: {
    marginTop: 10,
    marginBottom: 8,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#2c2c2e',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#e91e8c',
  },
 
  /* Título */
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e91e8c',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 28,
    marginTop: 12,
  },
 
  /* Formulário */
  formulario: {
    width: '100%',
  },
  label: {
    fontSize: 13,
    color: '#aaa',
    marginBottom: 4,
    marginTop: 4,
    marginLeft: 2,
  },
  input: {
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#fff',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#3a3a3c',
  },
  inputMultiline: {
    height: 100,
    textAlignVertical: 'top',
  },
 
  /* Botão */
  botaoContainer: {
    marginTop: 12,
    borderRadius: 10,
    overflow: 'hidden',
  },
 
  /* Resultado */
  resultado: {
    width: '100%',
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    padding: 20,
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#e91e8c',
  },
  resultadoTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e91e8c',
    letterSpacing: 1,
    marginBottom: 16,
    textAlign: 'center',
  },
  linha: {
    flexDirection: 'row',
    paddingVertical: 8,
    flexWrap: 'wrap',
  },
  campo: {
    color: '#aaa',
    fontSize: 14,
    marginRight: 6,
    fontWeight: '600',
  },
  valor: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  divisor: {
    height: 1,
    backgroundColor: '#3a3a3c',
  },
});
 