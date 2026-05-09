import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SerieScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        
    <Text style={styles.titulo}>3º ANO</Text>
    <Image 
          source={require('../../assets/images/etecitanhaem.png')} 
          style={{width: 180, height: 90, marginBottom: 30}}
          resizeMode="contain"
         />
    <View style={styles.caixacurso}>
          <Text style={styles.cursotexto}>Informática p/ Internet</Text>
     </View>
     <Text style={styles.subtitulo}>Técnico em Informática</Text>
    <Image 
          source={require('../../assets/images/terceiro.jpg')} 
          style={styles.imagemr}
          resizeMode="cover"
        /></ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
  },
  scroll: {
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  logo: {
    width: 180,
    height: 90,
    marginBottom: 30,
  },
  caixacurso: {
    width: '100%',
    padding: 20,
    borderWidth: 2,
    borderColor: '#CC0000',
    borderRadius: 10,
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginBottom: 15,
  },
  cursotexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CC0000',
  },
  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    fontWeight: '500',
  },
  imagemr: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },
});