// ServiceScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const ServiceScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.serviceTitle}>Choose a Service</Text>

      <View style={styles.grid}>
        <View style={styles.gridItem}>
          <FontAwesome5 name="leaf" size={40} color="#4CAF50" />
          <Text style={styles.gridText}>Lawn Mowing</Text>
        </View>
        <View style={styles.gridItem}>
          <FontAwesome5 name="seedling" size={40} color="#FFC107" />
          <Text style={styles.gridText}>Fertilization</Text>
        </View>
        <View style={styles.gridItem}>
          <FontAwesome5 name="tree" size={40} color="#795548" />
          <Text style={styles.gridText}>Edging</Text>
        </View>
        <View style={styles.gridItem}>
          <MaterialIcons name="grass" size={40} color="#03A9F4" />
          <Text style={styles.gridText}>Garden Cleanup</Text>
        </View>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <MaterialIcons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  serviceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 15,
    width: '45%',
  },
  gridText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#ed2647',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});

export default ServiceScreen;
