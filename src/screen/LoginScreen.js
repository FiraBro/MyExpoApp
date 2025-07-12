import { Image, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(4).required().label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen>
      <Image source={require("../../assets/Logo.jpg")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <>
          <AppFormField
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            name="email"
          />
          <AppFormField
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            icon="lock"
            name="password"
          />
          <SubmitButton title="Login" />
        </>
      </AppForm>
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
