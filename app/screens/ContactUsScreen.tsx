// ContactUsScreen.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <View style={styles.inputGroup}>
        <FontAwesome name="user" size={20} color="#7f7f7f" />
        <TextInput placeholder="Your Name" style={styles.input} />
      </View>
      <View style={styles.inputGroup}>
        <MaterialIcons name="email" size={20} color="#7f7f7f" />
        <TextInput placeholder="Your Email" style={styles.input} />
      </View>
      <View style={styles.inputGroup}>
        <MaterialIcons name="message" size={20} color="#7f7f7f" />
        <TextInput
          placeholder="Your Message"
          multiline
          numberOfLines={5}
          style={[styles.input, styles.textArea]}
        />
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7f7f7f',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  textArea: {
    height: 100,
  },
  submitButton: {
    backgroundColor: '#ed2647',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContactUsScreen;
