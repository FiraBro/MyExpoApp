import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppTexts from "../components/AppTexts";
import colors from "../config/colors";

export default function ListDetail() {
  return (
    <View>
      <Image style={style.image} source={require("../../assets/Logo.jpg")} />
      <View style={style.containerDetail}>
        <AppTexts style={style.tittle}>Jacket Mood</AppTexts>
        <AppTexts style={style.price}>$100</AppTexts>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  containerDetail: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  tittle: {
    fontSize: 24,
    fontWeight: 500,
  },
  price: {
    color: colors.secondaryColor,
    fontSize: 20,
    fontFamily: "bold",
  },
});
