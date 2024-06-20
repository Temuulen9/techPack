import { Stack } from "expo-router";
import React from "react";
import Toast from "react-native-toast-message";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Tech Pack",
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen name="login" options={{ title: "Нэвтрэх" }} />
      <Stack.Screen
        name="verifyOtp"
        options={{ title: "Бүртгүүлэх", headerShadowVisible: false }}
      />
      <Stack.Screen
        name="register"
        options={{ title: "Бүртгүүлэх", headerShadowVisible: false }}
      />
      <Stack.Screen
        name="homepage"
        options={{
          title: "Home Page",
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Toast />
    </Stack>
  );
}
