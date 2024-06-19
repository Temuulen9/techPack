import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="login">
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "Tech Pack" }}
      />
      <Stack.Screen name="login" options={{ title: "Нэвтрэх" }} />
      <Stack.Screen name="verifyOtp" options={{ title: "Бүртгүүлэх" }} />
      <Stack.Screen name="register" options={{ title: "Бүртгүүлэх" }} />
      <Stack.Screen
        name="homepage"
        options={{
          title: "Home Page",
          headerBackVisible: false,
          gestureEnabled: false,
        }}
      />
    </Stack>
  );
}
