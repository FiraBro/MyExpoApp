import React from "react";
import { View, Image, StyleSheet, Text, ImageBackground } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

export default function WellCome() {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={10}
        source={require("../../assets/NextPage.jpg")}
        style={styles.background}
      >
        <View style={styles.logo}>
          <Image
            source={require("../../assets/Logo.jpg")}
            style={styles.image}
          />
          <Text style={styles.tagline}>Hello Image</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <AppButton tittle="Login" />
          <AppButton tittle="Register" color="secondaryColor" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 50,
  },
  image: {
    width: 300,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },
  tagline: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 600,
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    rowGap: 20,
  },
});
