import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [nickname, setNickname] = useState('');

  return (
    <LinearGradient colors={['#89CFF0', '#6A77D1']} style={styles.gradientContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/cisco.jpg')} style={styles.image} />
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Bienvenido a NetHelp</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="User ID"
          value={userId}
          onChangeText={setUserId}
        />
        <TextInput
          style={styles.input}
          placeholder="Nickname"
          value={nickname}
          onChangeText={setNickname}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (userId && nickname) {
              navigation.navigate('Home', { nickname }); // Navegar a Home y pasar el nickname
            } else {
              alert('Por favor, ingrese un User ID y un Nickname');
            }
          }}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  welcomeTextContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    width: '85%',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  button: {
    width: '85%',
    paddingVertical: 15,
    backgroundColor: '#4bb5ff',
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});