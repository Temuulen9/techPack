import {
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Text,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import bcrypt from "react-native-bcrypt";
import firestore from "@react-native-firebase/firestore";
import Toast from "react-native-toast-message";

const Register = () => {
  const { phoneNumber } = useLocalSearchParams();

  const [password, onChangePassword] = useState("");
  const [passwordValidation, onChangePasswordValidation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const saltRounds = 10;

  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "white",
      paddingHorizontal: 20,
      paddingVertical: 15,
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

  const register = () => {
    if (!(password && passwordValidation)) {
      Toast.show({
        type: "error",
        text1: "Шаардлагатай талбаруудыг бөглөнө үү.",
      });
      return;
    }
    if (password != passwordValidation) {
      Toast.show({
        type: "error",
        text1: "Нууц үг ялгаатай байна.",
      });
      return;
    }

    setIsLoading(true);

    bcrypt.hash(password, saltRounds, function (err, hash) {
      firestore()
        .collection("users")
        .add({
          phoneNumber: phoneNumber,
          password: hash,
        })
        .then(() => {
          setIsLoading(false);
          Toast.show({
            type: "success",
            text1: "Бүртгэл амжилттай.",
          });
          router.dismissAll();
          router.push("/homepage");
        });
    });
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TextInput
        style={styles.input}
        placeholder="Утасны дугаар"
        placeholderTextColor="gray"
        keyboardType="phone-pad"
        value={phoneNumber as any}
        editable={false}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholderTextColor="gray"
        placeholder="Нууц үг"
        keyboardType="numeric"
        secureTextEntry
        editable={!isLoading}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePasswordValidation}
        value={passwordValidation}
        placeholderTextColor="gray"
        placeholder="Нууц үг баталгаажуулалт"
        keyboardType="numeric"
        secureTextEntry
        editable={!isLoading}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0081ff" />
      ) : (
        <Pressable style={styles.button} onPress={register}>
          <Text style={styles.text}>Бүртгүүлэх</Text>
        </Pressable>
      )}

      <Toast />
    </SafeAreaView>
  );
};

export default Register;
