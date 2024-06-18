import { Link } from "expo-router";
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
  const [text, onChangeText] = React.useState("");
  const [otpInput, setOtpInput] = React.useState("");
  const [showOtp, setShowOtp] = React.useState(false);
  const input = useRef<OTPTextView>(null);
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
    textInputContainer: {
      marginHorizontal: 25,
      marginBottom: 25,
    },
  });

  const handleCellTextChange = async (text: string, i: number) => {
    if (i === 0) {
      //   const clippedText = await Clipboard.getString();
      //   if (clippedText.slice(0, 1) === text) {
      //     input.current?.setValue(clippedText, true);
      //   }
    }
  };

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

        {showOtp ? (
          <OTPTextView
            ref={input}
            containerStyle={styles.textInputContainer}
            handleTextChange={setOtpInput}
            handleCellTextChange={handleCellTextChange}
            inputCount={6}
            keyboardType="numeric"
          />
        ) : (
          <View></View>
        )}

        <Button
          title="Утасны дугаар баталгаажуулах"
          onPress={() => setShowOtp(!showOtp)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
