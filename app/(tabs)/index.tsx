import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';


const darkTheme = {
  bgGradientEnd: '#0d1330', 
  textMain: '#ffffff',
  textSecondary: '#6293ba', 
  cardBg: 'rgba(255, 255, 255, 0.05)', 
  cardBorder: 'rgba(255, 255, 255, 0.1)', 
  shadow: 'rgba(0, 0, 0, 0.3)',
};

export default function HomeScreen() {
  return (

    <View style={styles.outerContainer}>
      <StatusBar style="light" />
      
      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        
        <Text style={styles.h1}>ETEC DE ITANHÁEM</Text>
        <View style={styles.logoContainer}>
            <Image 
                source={require('../../assets/images/etecitanhaem.png')} 
                style={styles.logoEtec}
                resizeMode="contain"
            />
        </View>
       
        <View style={styles.glassContainer}>
            <BlurView intensity={25} tint="dark" style={styles.blurCard}>
                <View style={styles.cardContent}>
                    <Text style={styles.textoCardPrincipal}>Informática</Text>
                    <Text style={styles.textoCardP}>p/</Text>
                    <Text style={styles.textoCardPrincipal}>INTERNET</Text>
                </View>
            </BlurView>
        </View>
        <View style={styles.glassContainerImagem}>
            <BlurView intensity={20} tint="dark" style={styles.blurCardImagem}>
                <Image 
                    source={require('../../assets/images/info.jpg')} 
                    style={styles.fotoRascunho}
                    resizeMode="contain"
                />
            </BlurView>
        </View>

      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: darkTheme.bgGradientEnd, 
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: darkTheme.textMain, 
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  logoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: 10,
    borderRadius: 50,
    marginBottom: 40,
  },
  logoEtec: {
    width: 160,
    height: 70,
    tintColor: darkTheme.textMain, 
  },
 
  glassContainer: {
    width: '100%',
    overflow: 'hidden', 
    borderRadius: 20,
    marginBottom: 40,
  
    shadowColor: darkTheme.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
  blurCard: {
    width: '100%',
    padding: 30,
    backgroundColor: darkTheme.cardBg,
    borderColor: darkTheme.cardBorder,
    borderWidth: 1,
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoCardPrincipal: {
    fontSize: 26,
    fontWeight: '800',
    color: darkTheme.textMain,
    textTransform: 'uppercase',
  },
  textoCardP: {
    fontSize: 18,
    marginVertical: 6,
    fontStyle: 'italic',
    color: darkTheme.textSecondary, 
  },
 
  glassContainerImagem: {
    width: '100%',
    alignItems: 'center',
  },
  blurCardImagem: {
    width: '90%',
    height: 250,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: darkTheme.cardBg,
    borderColor: darkTheme.cardBorder,
    borderWidth: 1,

    shadowColor: darkTheme.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 4,
  },
  fotoRascunho: {
    width: '100%',
    height: '100%',
    opacity: 0.7, 
  },
  legendaImagem: {
    marginTop: 10,
    fontSize: 12,
    color: darkTheme.textSecondary,
    opacity: 0.8,
  },
});