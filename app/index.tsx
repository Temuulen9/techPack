import { router } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import bcrypt from "react-native-bcrypt";
import Toast from "react-native-toast-message";

export default function Index() {
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [password, onChangePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "white",
      paddingHorizontal: 20,
    },
    input: {
      height: 45,
      marginVertical: 15,
      borderWidth: 1,
      padding: 10,
      borderBlockColor: "gray",
      borderColor: "gray",
      borderRadius: 8,
      tintColor: "gray",
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
      borderRadius: 10,
      elevation: 10,
      backgroundColor: "#0081ff",
      marginVertical: 7,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "400",
      letterSpacing: 0.25,
      color: "white",
    },
  });

  const logIn = async () => {
    try {
      if (phoneNumber && password) {
        const user = await firestore()
          .collection("users")
          .where("phoneNumber", "==", phoneNumber)
          .get();

        if (user.empty) {
          Toast.show({
            type: "info",
            text1: "Бүртгэлгүй хэрэглэгч байна.",
            text2: "Бүртгүүлэх товч дээр дарж бүртгүүлнэ үү.",
          });
        } else {
          setIsLoading(true);
          const hashedPassword = user.docs[0].data().password;
          bcrypt.compare(password, hashedPassword, function (err, res) {
            if (res) {
              onChangePhoneNumber("");
              onChangePassword("");
              router.push("homepage");
            } else {
              onChangePassword("");
              Toast.show({
                type: "error",
                text1: "Нууц үг буруу байна.",
              });
            }
            setIsLoading(false);
          });
        }
      } else {
        Toast.show({
          type: "info",
          text1: "Шаардлагатай талбаруудыг бөглөнө үү.",
        });
      }
    } catch (error) {
      Toast.show({
        type: "info",
        text1: "Алдаа гарлаа",
        text2: "Алдаа" + { error },
      });
      console.log("Login error " + error);
    }
  };

  const signUp = () => {
    onChangePhoneNumber("");
    onChangePassword("");
    router.push("verifyOtp");
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TextInput
        style={styles.input}
        onChangeText={onChangePhoneNumber}
        placeholder="Утасны дугаар"
        placeholderTextColor="gray"
        keyboardType="phone-pad"
        value={phoneNumber}
        editable={!isLoading}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholderTextColor="gray"
        placeholder="Нууц үг"
        keyboardType="default"
        secureTextEntry
        editable={!isLoading}
      />

      {isLoading ? (
        <ActivityIndicator size="large" color="#0081ff" />
      ) : (
        <>
          <Pressable style={styles.button} onPress={logIn}>
            <Text style={styles.text}>Нэвтрэх</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={signUp}>
            <Text style={styles.text}>Бүртгүүлэх</Text>
          </Pressable>
        </>
      )}
      <Toast />
    </SafeAreaView>
  );
}
