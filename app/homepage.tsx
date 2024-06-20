import AppBar from "@/components/homepage/AppBar";
import Banner from "@/components/homepage/Banner";
import FoodCard from "@/components/homepage/FoodCard";
import FoodItem from "@/components/homepage/FoodItem";
import { router } from "expo-router";
import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
} from "react-native";

export default function Index() {
  let foodItems = require("@/components/homepage/foodItems.json");
  let foodCards = require("@/components/homepage/foodCards.json");

  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: "white",
    },
    foodItem: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      paddingVertical: 20,
      marginHorizontal: 20,
    },
    foodCard: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingVertical: 20,
      marginHorizontal: 22,
    },
    text: {
      fontSize: 18,
      fontWeight: "700",
      marginHorizontal: 15,
    },
  });

  var foodItemsList = [];
  const foodItemImages = [
    require("@/assets/images/offer.png"),
    require("@/assets/images/chicken.png"),
    require("@/assets/images/rice.png"),
    require("@/assets/images/burger.png"),
    require("@/assets/images/pizza.png"),
    require("@/assets/images/coffee.png"),
    require("@/assets/images/boba.png"),
    require("@/assets/images/salad.png"),
  ];
  for (let i = 0; i < foodItems.items.length; i++) {
    foodItemsList.push(
      <FoodItem
        key={foodItems.items[i].title}
        image={foodItemImages[i]}
        title={foodItems.items[i].title}
      />
    );
  }

  var foodCardList = [];

  const foodCardImages = [
    require("@/assets/images/mcdonalds.png"),
    require("@/assets/images/forecoffee.png"),
  ];

  for (let i = 0; i < foodCards.items.length; i++) {
    foodCardList.push(
      <FoodCard
        key={foodCards.items[i].title}
        image={foodCardImages[i]}
        title={foodCards.items[i].title}
        desc={foodCards.items[i].desc}
        rate={foodCards.items[i].rate}
      />
    );
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <AppBar />
        <Banner />
        <View style={styles.foodItem}>{foodItemsList}</View>
        <Text style={styles.text}>Featured</Text>
        <View style={styles.foodCard}>{foodCardList}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
