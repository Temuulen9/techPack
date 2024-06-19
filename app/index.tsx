import { Link } from "expo-router";
import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
  Alert,
  SafeAreaView,
} from "react-native";

export default function Index() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      marginHorizontal: 16,
    },
    title: {
      textAlign: "center",
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: "#737373",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    link: {
      fontSize: 22,
      fontWeight: "300",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Link href="/login" style={styles.link}>
        Нэвтрэх
      </Link>
      <Link href="/verifyOtp" style={styles.link}>
        Бүртгүүлэх
      </Link>
    </SafeAreaView>
  );
}
