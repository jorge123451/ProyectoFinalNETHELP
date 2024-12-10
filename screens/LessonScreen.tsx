import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LessonScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    require('../assets/tema1/module1_pages-to-jpg-0001.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0002.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0003.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0004.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0005.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0006.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0007.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0008.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0009.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0010.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0011.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0012.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0013.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0014.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0015.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0016.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0017.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0018.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0019.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0020.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0021.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0022.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0023.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0024.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0025.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0026.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0027.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0028.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0029.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0030.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0031.jpg'),
    require('../assets/tema1/module1_pages-to-jpg-0032.jpg'),
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <LinearGradient colors={['#89CFF0', '#6A77D1']} style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Cisco Networking Academy</Text>
        </View>

        {/* Imagen actual */}
        <View style={styles.imageContainer}>
          <Image source={images[currentImageIndex]} style={styles.image} resizeMode="contain" />
        </View>

        {/* Botones de navegación debajo de la imagen */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePrevImage} style={styles.navButton}>
            <Text style={styles.navButtonText}>◀</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextImage} style={styles.navButton}>
            <Text style={styles.navButtonText}>▶</Text>
          </TouchableOpacity>
        </View>

        {/* Título del Tema y Descripción */}
        <View style={styles.topicSection}>
          <Text style={styles.topicTitle}>Inter-VLAN Routing</Text>
          <Text style={styles.duration}>What is Inter-VLAN Routing?</Text>
          <Text style={styles.topicDescription}>
          VLANs are used to segment switched Layer 2 networks for a variety of reasons. Regardless of the
          reason, hosts in one VLAN cannot communicate with hosts in another VLAN unless there is a router
          or a Layer 3 switch to provide routing services.
          </Text>
        </View>

        {/* Actividad */}
        <View style={styles.activitySection}>
          <Text style={styles.activityTitle}>Actividad 1</Text>
          <Text style={styles.activityDescription}>
          Inter-VLAN Routing on a Layer 3 Switch
          </Text>
        </View>

        {/* Evaluación */}
        <View style={styles.evaluationSection}>
          <Text style={styles.evaluationTitle}>Practica 1</Text>
          <Text style={styles.evaluationQuestion}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default LessonScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  header: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004AAD',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -25, // Menor distancia entre imagen y botones
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  navButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Igual que las secciones
    borderRadius: 25,
  },
  navButtonText: {
    color: '#004AAD',
    fontSize: 18,
    fontWeight: 'bold',
  },
  topicSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  topicTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  duration: {
    color: '#fff',
    fontSize: 14,
  },
  topicDescription: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  activitySection: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  activityDescription: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  evaluationSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  evaluationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  evaluationQuestion: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  sendButton: {
    backgroundColor: '#4bb5ff',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 15,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
