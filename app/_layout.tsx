import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Home" options={{ title: 'Home' }} />
      <Stack.Screen name="Services" options={{ title: 'Services' }} />
      <Stack.Screen name="Request" options={{ title: 'Request' }} />
      <Stack.Screen name="Contact" options={{ title: 'Contact' }} />
    </Stack>
  );
}
