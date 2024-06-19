import { Link } from "expo-router";
import React, { useState } from "react";
import { TextInput, StyleSheet, SafeAreaView, ScrollView } from "react-native";

export default function Index() {
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [password, onChangePassword] = useState("");

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
          onChangeText={onChangePhoneNumber}
          placeholder="Утасны дугаар"
          placeholderTextColor="black"
          keyboardType="phone-pad"
          value={phoneNumber}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholderTextColor="black"
          placeholder="Нууц үг"
          keyboardType="numeric"
          secureTextEntry
        />
        <Link href="(app)/homepage" style={styles.link}>
          Нэвтрэх
        </Link>

        {/* 

          1. firebase signInWithMobileNumber ashiglaj otp verification hiine
          2. firebase firestore ashiglaj hereglegch burtgene
          3. firebase firestore ashiglaj hereglegch sign up hiine

        */}
      </ScrollView>
    </SafeAreaView>
  );
}
