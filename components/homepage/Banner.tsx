import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const Banner = () => {
  const { height, width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#61bd6c",
      borderRadius: 18,
      height: height / 4.8,
      padding: 25,
      marginHorizontal: 20,
      justifyContent: "space-between",
    },
    subview: {
      flex: 1,
    },
    text: {
      fontSize: 20,
      color: "white",
      fontWeight: "700",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 15,
      paddingVertical: 8,
      borderRadius: 16,
      backgroundColor: "black",
      width: 120,
    },
    buttonText: {
      fontSize: 16,
      color: "white",
      fontWeight: "500",
    },
  });

  return (
    <View style={styles.view}>
      <View style={styles.subview}>
        <Text style={styles.text}>Claim your daily free delivery now!</Text>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Order now</Text>
        </Pressable>
      </View>
      <View style={styles.subview}>
        <Image
          source={require("@/assets/images/deliveryman.png")}
          resizeMethod="resize"
          resizeMode="cover"
          style={{
            flex: 1,
            width: undefined,
            height: undefined,
          }}
        />
      </View>
    </View>
  );
};

export default Banner;
