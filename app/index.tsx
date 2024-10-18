import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavigationDrawer from "./components/NavigationDrawer";
import { Text } from "react-native";
import HomeScreen from "./components/Home";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationDrawer>
        <Stack />
        <HomeScreen />
      </NavigationDrawer>
    </GestureHandlerRootView>
  );
};

export default App;
