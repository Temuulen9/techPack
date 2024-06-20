import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Dimensions,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const FoodCard = ({
  title,
  desc,
  image,
  rate,
}: {
  title: string;
  desc: string;
  image: ImageSourcePropType;
  rate: number;
}) => {
  const { height, width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    safeAreaView: {
      justifyContent: "space-between",
      height: 190,
      width: width / 2 - 30,
      marginVertical: 10,
      // backgroundColor: "red",
    },
    text: {
      textAlign: "left",
      fontSize: 13,
      fontWeight: "700",
    },
    desc: {
      textAlign: "left",
      fontSize: 12,
      fontWeight: "500",
    },
    rate: {
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      backgroundColor: "white",
      top: 10,
      right: 10,
      paddingHorizontal: 6,
      paddingVertical: 3,
      borderRadius: 10,
    },
    rateText: {
      fontSize: 12,
      paddingLeft: 3,
    },
  });
  return (
    <TouchableOpacity style={styles.safeAreaView}>
      <Image
        source={image}
        resizeMethod="resize"
        resizeMode="cover"
        style={{
          flex: 1,
          width: undefined,
          height: undefined,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <View style={styles.rate}>
        <AntDesign name="star" size={16} color="orange" />
        <Text style={styles.rateText}>{rate}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
