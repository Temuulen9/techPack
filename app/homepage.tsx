import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Home Page</Text>

      <Text
        onPress={() => {
          router.dismissAll();
        }}
      >
        Sign Out
      </Text>
    </View>
  );
}
