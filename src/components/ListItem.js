import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppTexts from "./AppTexts";
import colors from "../config/colors";

export default function ListItem({ tittle, image, subTittle }) {
  return (
    <View style={style.holeContainer}>
      <Image style={style.image} source={image} />
      <View style={style.container}>
        <AppTexts style={style.tittle}>{tittle}</AppTexts>
        <AppTexts style={style.subTittle}>{subTittle}</AppTexts>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  holeContainer: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  tittle: {
    fontWeight: 500,
  },
  subTittle: {
    color: colors.medium,
  },
});
