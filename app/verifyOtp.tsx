// import { FIREBASE_AUTH } from "@/FirebaseConfig";
// import { Link } from "expo-router";
// import { signInWithPhoneNumber, ApplicationVerifier } from "firebase/auth";
// import { firebase } from "@react-native-firebase/auth";

import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

import React, { useRef } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  ScrollView,
  View,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";

export default function Index() {
  const [phoneNumber, onChangephoneNumber] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [showOtp, setShowOtp] = React.useState(false);
  const [confirm, setConfirm] = React.useState<any>(null);
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
    },
    link: {
      alignSelf: "center",
      fontSize: 22,
      fontWeight: "300",
    },
    textInputContainer: {
      marginBottom: 25,
    },
  });

  const handleCellTextChange = async (text: string, i: number) => {
    setOtp(text);

    if (i === 5) {
      confirmCode();
    }
  };

  const sendCode = async () => {
    setShowOtp(!showOtp);

    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation.verificationId);
    } catch (error) {
      console.log("Error sending code " + error);
    }
  };

  const confirmCode = async () => {
    try {
      const userCredential = await confirm.confirm(otp);
      const user = userCredential.user;
      console.log(userCredential);
      console.log(user);
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

        {showOtp ? (
          <OTPTextView
            ref={input}
            containerStyle={styles.textInputContainer}
            handleTextChange={setOtp}
            handleCellTextChange={handleCellTextChange}
            inputCount={6}
            keyboardType="numeric"
            tintColor="#000000"
          />
        ) : (
          <View></View>
        )}

        <Button title="Утасны дугаар баталгаажуулах" onPress={sendCode} />
      </ScrollView>
    </SafeAreaView>
  );
}
