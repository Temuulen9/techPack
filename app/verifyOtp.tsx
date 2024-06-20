import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  ActivityIndicator,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";
import Toast from "react-native-toast-message";

export default function Index() {
  const [phoneNumber, onChangephoneNumber] = useState("");
  const [confirm, setConfirm] = useState<any>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const input = useRef<OTPTextView>(null);

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
    textInputContainer: {
      marginBottom: 25,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 6,
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

  const handleTextChange = (text: string) => {
    if (text.length === 6) {
      confirmCode(text);
    }
  };

  const sendCode = async () => {
    if (!phoneNumber) {
      Toast.show({
        type: "error",
        text1: "Шаардлагатай талбаруудыг бөглөнө үү.",
      });
      return;
    }
    if (await userAlreadyExist()) {
      Toast.show({
        type: "info",
        text1: "Бүртгэлтэй хэрэглэгч байна.",
        text2: "Нэвтрэх хэсэгт утасны дугаар нууц үгээ оруулан нэвтэрнэ үү.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      setOtpSent(true);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Алдаа гарлаа",
        text2: "Алдаа: " + error,
      });
      console.log("Error sending code " + error);
    } finally {
      setIsLoading(false);
    }
  };

  const userAlreadyExist = async () => {
    const user = await firestore()
      .collection("users")
      .where("phoneNumber", "==", phoneNumber)
      .get();

    return !user.empty;
  };

  const confirmCode = async (otp: string) => {
    setIsLoading(true);

    try {
      if (confirm) {
        const userCredential = await confirm.confirm(otp);
        const user = userCredential.user;

        if (user) {
          router.push({
            pathname: `/register/`,
            params: { phoneNumber: phoneNumber },
          });
        }
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Алдаа гарлаа",
        text2: "Алдаа: " + error,
      });
      console.log("Error confirm code " + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TextInput
        style={styles.input}
        onChangeText={onChangephoneNumber}
        placeholder="+97696969696"
        placeholderTextColor="gray"
        keyboardType="phone-pad"
        value={phoneNumber}
        editable={!isLoading}
      />

      {otpSent ? (
        <OTPTextView
          ref={input}
          containerStyle={styles.textInputContainer}
          handleTextChange={handleTextChange}
          inputCount={6}
          keyboardType="numeric"
          tintColor="#0081ff"
          offTintColor={"#e8f4ff"}
        />
      ) : (
        <View></View>
      )}

      {isLoading ? (
        <ActivityIndicator size="large" color="#0081ff" />
      ) : (
        <Pressable style={styles.button} onPress={sendCode}>
          <Text style={styles.text}>
            {otpSent ? "Дахин илгээх" : "Утасны дугаар баталгаажуулах"}
          </Text>
        </Pressable>
      )}

      <Toast />
    </SafeAreaView>
  );
}
