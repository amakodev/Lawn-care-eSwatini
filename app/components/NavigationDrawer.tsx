// NavigationDrawer.tsx
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { PanGestureHandler, PanGestureHandlerGestureEvent, State } from 'react-native-gesture-handler';
import { Href, Link } from 'expo-router';

const { width } = Dimensions.get('window');

const screens: { name: 'Home' | 'Services' | 'Request' | 'Contact'; icon: string }[] = [
  { name: 'Services', icon: 'leaf' },
  { name: 'Request', icon: 'clipboard-list' },
  { name: 'Contact', icon: 'phone' },
];

const NavigationDrawer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const translateX = useRef(new Animated.Value(-width * 0.75)).current;

  const toggleDrawer = () => {
    Animated.timing(translateX, {
      toValue: isOpen ? -width * 0.75 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsOpen(!isOpen);
    });
  };

  const handleGestureEvent = Animated.event<PanGestureHandlerGestureEvent>(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const handleGestureEnd = (event: PanGestureHandlerGestureEvent['nativeEvent']) => {
    if (event.translationX > 100) {
      toggleDrawer();
    } else {
      Animated.timing(translateX, {
        toValue: -width * 0.75,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsOpen(false));
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Drawer Content */}
      <PanGestureHandler
        onGestureEvent={handleGestureEvent}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.END) handleGestureEnd(nativeEvent);
        }}
      >
        <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
          <Text style={styles.drawerTitle}>Lawn-care eSwatini</Text>
          <TouchableOpacity style={styles.closeMenuButton} onPress={toggleDrawer}>
        <MaterialIcons name="close" size={30} color="#fff" />
      </TouchableOpacity>
          {screens.map((screen, index) => (
            <Link 
              key={index} 
              href={`/${screen.name}` as Href<string | object>}
              style={styles.drawerItem}
              onPress={toggleDrawer} // Close the drawer on item press
            >
              <FontAwesome5 name={screen.icon} size={10}  color="#fff" />
              <Text style={styles.drawerItemText}> - {screen.name}</Text>
            </Link>
          ))}
        </Animated.View>
      </PanGestureHandler>

      {/* Menu Button */}
      <TouchableOpacity style={styles.menuButton} onPress={toggleDrawer}>
        <MaterialIcons name="menu" size={20} color="#fff" />
      </TouchableOpacity>

      {/* Optional children can be rendered here */}
      {children}

      <Text style={styles.copyright}>Developed By UsCreativz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.75,
    backgroundColor: '#222', // Background color of the drawer
    padding: 20,
    zIndex: 1000, // Ensure the drawer is above other components
    borderBottomRightRadius: 30, // Rounded corners for aesthetics
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green', // Brand color for the title
    marginTop: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  drawerItemText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 30,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#ed2647', // Brand color for the button
    padding: 10,
    borderRadius: 30,
    zIndex: 100, // Ensure button is above other elements
    elevation: 5, // Add shadow for Android
  },
  closeMenuButton: {
    padding: 10,
    right: 20,
    width: '100%',
    //borderWidth: 10,
    alignItems: 'flex-end',
  },
  copyright: {
    borderWidth: 1,
    textAlign: 'center',
    paddingVertical: 5,
    backgroundColor: '#222',
    color: '#f4f4f4'
  }
});

export default NavigationDrawer;
