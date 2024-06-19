import {
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Text,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";

const Register = () => {
  const [password, onChangePassword] = useState("");

  /// phoneNumber verifyOtp delgetsees damjuulna
  const [phoneNumber, setphoneNumber] = useState("");

  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      marginHorizontal: 15,
      marginVertical: 20,
    },
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      marginVertical: 15,
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

  const register = () => {
    /// burtgel amjilttai bolson tohioldold dismissAll hiine
    router.dismissAll();
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Утасны дугаар"
          placeholderTextColor="black"
          keyboardType="phone-pad"
          value={phoneNumber}
          aria-disabled={true}
          editable={false}
          selectTextOnFocus={false}
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
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholderTextColor="black"
          placeholder="Нууц үг баталгаажуулалт"
          keyboardType="numeric"
          secureTextEntry
        />
        <Pressable style={styles.button} onPress={register}>
          <Text style={styles.text}>Бүртгүүлэх</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
