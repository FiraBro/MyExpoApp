import { Image, StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";
import Screen from "../components/Screen";
import AppInputText from "../components/AppInputText";
import AppButton from "../components/AppButton";

export default function LoginScreen() {
  return (
    <Screen>
      <Image source={require("../../assets/Logo.jpg")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <AppInputText
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              value={values.email}
            />
            <AppInputText
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              icon="lock"
              onChangeText={handleChange("password")}
              value={values.password}
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
    borderRadius: 20,
  },
});
