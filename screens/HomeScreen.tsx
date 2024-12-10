import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Obtén el nickname desde los parámetros de la ruta
  const { nickname } = route.params;

  return (
    <LinearGradient colors={['#89CFF0', '#6A77D1']} style={styles.gradientContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../assets/Cisco-logo-black.png')} style={styles.logo} />
          <Text style={styles.welcomeText}>BIENVENIDO {nickname}!</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Encuentra un curso"
              placeholderTextColor="#ffffff"
            />
            <TouchableOpacity style={styles.searchIconContainer}>
              <Text style={styles.searchIcon}>🔍</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cursos Activos */}
        <Text style={styles.sectionTitle}>Cursos Activos</Text>
        <TouchableOpacity style={[styles.courseCard, styles.transparentCard]} onPress={() => navigation.navigate('CCNA')}>
          <View style={styles.progressContainer}>
            <ProgressBar progress={0.5} color="#4bb5ff" style={styles.progressBar} />
            <Text style={styles.progressText}>50%</Text>
          </View>
          <View>
            <Text style={styles.courseTitle}>CCNA</Text>
            <Text style={styles.courseSubtitle}>{nickname}!</Text>
            <Text style={styles.courseContinue}>Continuar modulo 3</Text>
          </View>
        </TouchableOpacity>

        {/* Categorías */}
        <Text style={styles.sectionTitle}>Categorías</Text>
        <View style={styles.categoryList}>
          <View style={[styles.categoryItem, styles.transparentItem]}><Text style={styles.categoryText}>MACADDRESS</Text></View>
          <View style={[styles.categoryItem, styles.transparentItem]}><Text style={styles.categoryText}>VLANS</Text></View>
          <View style={[styles.categoryItem, styles.transparentItem]}><Text style={styles.categoryText}>Categoría 3</Text></View>
          <View style={[styles.categoryItem, styles.transparentItem]}><Text style={styles.categoryText}>Categoría 4</Text></View>
        </View>

        {/* Cursos Populares */}
        <Text style={styles.sectionTitle}>Cursos Populares</Text>
        <View style={styles.popularCoursesContainer}>
          <TouchableOpacity style={[styles.popularCourseCard, styles.transparentCard]}>
            <Text style={styles.courseText}>CCNA</Text>
            <Text style={styles.courseRating}>⭐ 5.0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.popularCourseCard, styles.transparentCard]}>
            <Text style={styles.courseText}>CCNP</Text>
            <Text style={styles.courseRating}>⭐ 4.8</Text>
          </TouchableOpacity>
        </View>

        {/* Guardados */}
        <Text style={styles.sectionTitle}>Guardados</Text>
        <View style={styles.savedCoursesContainer}>
          <TouchableOpacity style={[styles.savedCourseCard, styles.transparentCard]}>
            <Text style={styles.courseText}>CCNA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.savedCourseCard, styles.transparentCard]}>
            <Text style={styles.courseText}>CCNP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Barra de Navegación Fija */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home" size={24} color="#007aff" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="person" size={24} color="#007aff" />
          <Text style={styles.navButtonText}>Usuario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="settings" size={24} color="#007aff" />
          <Text style={styles.navButtonText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 80, // Espacio extra al final para evitar que el contenido se oculte detrás de la barra de navegación
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logo: {
    width: 80,
    height: 40,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#89CFF0', // Cambiado a blanco
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#89CFF0', // Azul claro del fondo
    borderRadius: 20,
    paddingHorizontal: 10,
    width: '90%',
    height: 40,
  },
  searchInput: {
    flex: 1,
    color: '#ffffff', // Cambiado a blanco
  },
  searchIconContainer: {
    paddingHorizontal: 8,
  },
  searchIcon: {
    fontSize: 16,
    color: '#ffffff', // Cambiado a blanco
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff', // Cambiado a blanco
    marginVertical: 10,
  },
  courseCard: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  transparentCard: {
    backgroundColor: 'rgba(216, 234, 253, 0.3)', // Fondo de tarjeta con transparencia
  },
  progressContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  progressBar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    position: 'absolute',
    color: '#007aff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff', // Cambiado a blanco
  },
  courseSubtitle: {
    color: '#ffffff', // Cambiado a blanco
    fontSize: 12,
    marginVertical: 2,
  },
  courseContinue: {
    color: '#ffffff', // Cambiado a blanco
    fontSize: 12,
  },
  categoryList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    backgroundColor: 'rgba(194, 225, 255, 0.3)', // Fondo de categoría con transparencia
    width: '22%',
    height: 70,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: '#ffffff', // Cambiado a blanco
  },
  popularCoursesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularCourseCard: {
    width: '47%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  courseText: {
    color: '#ffffff', // Cambiado a blanco
  },
  courseRating: {
    color: '#ffffff', // Cambiado a blanco
    fontSize: 12,
    marginTop: 5,
  },
  savedCoursesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  savedCourseCard: {
    width: '47%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },

  /* Estilos para la barra de navegación */
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#007aff',
    fontSize: 12,
    marginTop: 4,
  },
});
