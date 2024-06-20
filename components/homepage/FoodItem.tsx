import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Dimensions,
} from "react-native";
import React from "react";
const FoodItem = ({
  image,
  title,
}: {
  image: ImageSourcePropType;
  title: string;
}) => {
  const { height, width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    safeAreaView: {
      justifyContent: "space-between",
      // backgroundColor: "red",
      height: 100,
      width: width / 4 - 20,
      padding: 10,
      marginVertical: 10,
    },
    text: {
      textAlign: "center",
      fontSize: 14,
      fontWeight: "600",
    },
    icon: {},
  });

  return (
    <TouchableOpacity style={styles.safeAreaView}>
      <Image
        source={image}
        resizeMethod="resize"
        resizeMode="contain"
        style={{
          flex: 1,
          width: undefined,
          height: undefined,
        }}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FoodItem;
