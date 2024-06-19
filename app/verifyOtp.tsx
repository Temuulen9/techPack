import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";

export default function Index() {
  const [phoneNumber, onChangephoneNumber] = useState("");
  const [confirm, setConfirm] = useState<any>(null);
  const [otpSent, setOtpSent] = useState(false);
  const input = useRef<OTPTextView>(null);

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
    textInputContainer: {
      marginBottom: 25,
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

  const handleTextChange = (text: string) => {
    if (text.length === 6) {
      confirmCode(text);
    }
  };

  const sendCode = async () => {
    if (!phoneNumber) {
      console.log("enter required field");
      return;
    }
    if (await userAlreadyExist()) {
      console.log("Already exist");
      return;
    }

    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      setOtpSent(true);
    } catch (error) {
      console.log("Error sending code " + error);
    }
  };

  const userAlreadyExist = async () => {
    const user = await firestore()
      .collection("users")
      .where("mobile_number", "==", phoneNumber)
      .get();

    return !user.empty;
  };

  const confirmCode = async (otp: string) => {
    try {
      if (confirm) {
        const userCredential = await confirm.confirm(otp);
        const user = userCredential.user;

        /// verification valid bolson tohioldold register delgetsruu ochno
        if (user) {
          router.push("/register");
        }
        /// verification buruu bolson uyiin logic
        else {
        }
      }
    } catch (error) {
      console.log("Error confirm code " + error);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <TextInput
          style={styles.input}
          onChangeText={onChangephoneNumber}
          placeholder="Утасны дугаар"
          placeholderTextColor="black"
          keyboardType="phone-pad"
          value={phoneNumber}
        />

        {otpSent ? (
          <OTPTextView
            ref={input}
            containerStyle={styles.textInputContainer}
            handleTextChange={handleTextChange}
            inputCount={6}
            keyboardType="numeric"
            tintColor="#000000"
          />
        ) : (
          <View></View>
        )}

        <Pressable style={styles.button} onPress={sendCode}>
          <Text style={styles.text}>
            {otpSent ? "Дахин илгээх" : "Утасны дугаар баталгаажуулах"}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
