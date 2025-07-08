import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppInputText from "../components/AppInputText";
import AppButton from "../components/AppButton";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen>
      <Image source={require("../../assets/Logo.jpg")} style={styles.logo} />
      <AppInputText
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />
      <AppInputText
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        icon="lock"
        onChangeText={(text) => setPassword(text)}
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    borderRadius:20
  },
});
