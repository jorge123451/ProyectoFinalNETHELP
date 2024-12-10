import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CCNAScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#89CFF0', '#6A77D1']} style={styles.gradientContainer}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Header con fondo blanco */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#007aff" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Curso 1</Text>
          <Ionicons name="bookmark-outline" size={24} color="#007aff" style={styles.bookmarkIcon} />
        </View>

        {/* Descripción */}
        <View style={[styles.transparentSection, styles.spacing]}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit torquent posuere.
          </Text>
          <View style={styles.courseInfo}>
            <Text style={styles.whiteText}>🌟 Nivel: Iniciación</Text>
            <Text style={styles.whiteText}>📚 4 Módulos</Text>
            <Text style={styles.whiteText}>⭐ 91 valoraciones</Text>
            <Text style={styles.whiteText}>🌐 Español, English</Text>
          </View>
        </View>

        {/* Lo que aprenderás */}
        <View style={[styles.transparentSection, styles.spacing]}>
          <Text style={styles.sectionTitle}>Lo que aprenderás</Text>
          <View style={styles.learningItems}>
            <Text style={styles.whiteText}>✅ Dato1</Text>
            <Text style={styles.whiteText}>✅ Dato2</Text>
            <Text style={styles.whiteText}>✅ Dato3</Text>
            <Text style={styles.whiteText}>✅ Dato4</Text>
            
          </View>
        </View>

        {/* Materiales y Reviews */}
        <View style={styles.tabs}>
          <Text style={styles.tab}>Materiales</Text>
          <Text style={styles.tabInactive}>Reviews</Text>
        </View>

        {/* Lista de Capítulos */}
        <View style={styles.chapterList}>
          <TouchableOpacity
            style={[styles.transparentSection, styles.spacing]}
            onPress={() => navigation.navigate('LessonScreen')} // Navega a LessonScreen al presionar
          >
            <Text style={styles.chapterTitle}>Modulo 1</Text>
            
          </TouchableOpacity>

          <View style={[styles.transparentSection, styles.spacing]}>
            <Text style={styles.chapterTitle}>Modulo 2</Text>
            
          </View>

          <View style={[styles.transparentSection, styles.spacing]}>
            <Text style={styles.chapterTitle}>Modulo 3</Text>
            
          </View>

          <View style={[styles.transparentSection, styles.spacing]}>
            <Text style={styles.chapterTitle}>Modulo 4</Text>
            
          </View>
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






export default CCNAScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 80, // Añade espacio para que el contenido no se solape con la barra de navegación
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 16,
  },
  backIcon: {
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#007aff',
  },
  bookmarkIcon: {
    marginRight: 10,
  },
  transparentSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)', // Aumenta la transparencia
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  descriptionText: {
    color: '#ffffff',
    marginBottom: 10,
  },
  courseInfo: {
    color: '#ffffff',
  },
  whiteText: {
    color: '#ffffff',
  },
  learningItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  tab: {
    fontSize: 16,
    color: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    paddingBottom: 5,
  },
  tabInactive: {
    fontSize: 16,
    color: '#aaa',
  },
  chapterList: {
    marginBottom: 20,
  },
  chapterTitle: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  chapterStatus: {
    color: '#ffffff',
  },
  chapterIcon: {
    marginLeft: 10,
  },
  progressBar: {
    width: '50%',
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  spacing: {
    marginVertical: 10,
  },
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
