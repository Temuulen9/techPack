import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const AppBar = () => {
  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      paddingHorizontal: 20,
      paddingTop: 50,
      paddingBottom: 25,
    },
    view: {
      alignItems: "center",
    },
    textTitle: {
      fontSize: 14,
      fontWeight: "700",
    },
    textDesc: {
      fontSize: 12,
      fontWeight: "300",
      color: "gray",
    },
  });
  const logOutAlert = () => {
    Alert.alert("Гарах", "Та гарахдаа итгэлтэй байна уу?", [
      {
        text: "Болих",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Гарах",
        onPress: () => {
          /// user logout hiine
          router.dismissAll();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TouchableOpacity onPress={logOutAlert}>
        <SimpleLineIcons name="logout" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.view}>
        <Text style={styles.textDesc}>Current location</Text>
        <Text style={styles.textTitle}>
          {<EvilIcons name="location" size={16} color="#61bd6c" />} Ulaanbaatar,
          Mongolia
        </Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="notifications" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AppBar;
