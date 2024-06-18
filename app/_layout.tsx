import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Нүүр хуудас" }}
      />
      <Stack.Screen name="login" options={{ title: "Нэвтрэх" }} />
      <Stack.Screen name="register" options={{ title: "Бүртгүүлэх" }} />
      <Stack.Screen
        name="(app)"
        options={{
          title: "Home Page",
          headerBackVisible: false,
          gestureEnabled: false,
        }}
      />
    </Stack>
  );
}
