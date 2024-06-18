import { Link } from "expo-router";
import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  ScrollView,
} from "react-native";

export default function Index() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    link: {
      alignSelf: "center",
      fontSize: 22,
      fontWeight: "300",
    },
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Утасны дугаар"
          placeholderTextColor="black"
          keyboardType="numeric"
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholderTextColor="black"
          placeholder="Нууц үг"
          keyboardType="numeric"
        />
        <Link href="(app)/homepage" style={styles.link}>
          Нэвтрэх
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}
