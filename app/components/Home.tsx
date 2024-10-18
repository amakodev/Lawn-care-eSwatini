// HomeScreen.tsx
import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Importing vector icons

const HomeScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Hero Section */}
      <Animated.View style={[styles.heroSection, { opacity: fadeAnim }]}>
        <Text style={styles.heroText}>Leave the Mowing to Us!</Text>
        <Text style={styles.subText}>A beautiful lawn doesn't happen by accident.</Text>
      </Animated.View>

      {/* Services Section */}
      <View style={styles.serviceSection}>
        <Text style={styles.serviceTitle}>Our Services</Text>
        <View style={styles.serviceList}>
          <View style={styles.serviceCard}>
            <FontAwesome5 name="leaf" size={40} color="#4CAF50" />
            <Text style={styles.serviceCardText}>Lawn Mowing</Text>
          </View>
          <View style={styles.serviceCard}>
            <FontAwesome5 name="seedling" size={40} color="#FFC107" />
            <Text style={styles.serviceCardText}>Fertilization</Text>
          </View>
          <View style={styles.serviceCard}>
            <FontAwesome5 name="tree" size={40} color="#795548" />
            <Text style={styles.serviceCardText}>Edging</Text>
          </View>
        </View>
      </View>

      {/* Call to Action */}
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>Request a Lawn Service</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
  },
  heroSection: {
    height: 300,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heroText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 10,
    textAlign: 'center',
  },
  serviceSection: {
    padding: 20,
  },
  serviceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
  },
  serviceList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    width: '30%',
  },
  serviceCardText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    fontWeight: 'bold',
  },
  ctaButton: {
    backgroundColor: '#ed2647',
    padding: 15,
    margin: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  ctaText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
