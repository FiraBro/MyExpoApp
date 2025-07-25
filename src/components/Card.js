import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";
import React from "react";
import colors from "../config/colors";
import AppTexts from "./AppTexts";

export default function Card({ title, image, subTittle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} tint="light" uri={image} />
      <View style={styles.textContainer}>
        <AppTexts>{title}</AppTexts>
        <AppTexts style={styles.subTitle}>{subTittle}</AppTexts>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 15,
    marginTop: 40,
    padding: 25,
  },
  subTitle: {
    color: colors.secondaryColor,
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    paddingTop: 10,
  },
});
