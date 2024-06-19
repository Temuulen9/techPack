import { router } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import firestore from "@react-native-firebase/firestore";

export default function Index() {
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [password, onChangePassword] = useState("");

  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      marginHorizontal: 20,
      justifyContent: "center",
    },
    input: {
      height: 40,
      marginVertical: 15,
      borderWidth: 1,
      padding: 10,
    },
    link: {
      alignSelf: "center",
      fontSize: 22,
      fontWeight: "300",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "black",
      marginVertical: 7,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },
  });

  const logIn = async () => {
    try {
      if (phoneNumber && password) {
        const user = await firestore()
          .collection("users")
          .where("mobile_number", "==", phoneNumber)
          .get();

        if (user.empty) {
          console.log("Please register");
        } else {
          onChangePhoneNumber("");
          onChangePassword("");
          router.push("homepage");
        }
      } else {
        console.log("Enter required fields!");
      }
    } catch (error) {
      console.log("Login error " + error);
    }
  };

  const signUp = () => {
    router.push("verifyOtp");
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
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
        keyboardType="default"
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={logIn}>
        <Text style={styles.text}>Нэвтрэх</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={signUp}>
        <Text style={styles.text}>Бүртгүүлэх</Text>
      </Pressable>
    </SafeAreaView>
  );
}
