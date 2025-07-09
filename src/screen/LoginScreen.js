import { Image, StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";
import Screen from "../components/Screen";
import AppInputText from "../components/AppInputText";
import AppButton from "../components/AppButton";
import * as yup from "yup";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(4).required().label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen>
      <Image source={require("../../assets/Logo.jpg")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
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
