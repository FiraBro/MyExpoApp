import { Image, StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";
import Screen from "../components/Screen";
import AppInputText from "../components/AppInputText";
import AppButton from "../components/AppButton";
import * as yup from "yup";
import AppTexts from "../components/AppTexts";

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
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          handleBlur,
        }) => (
          <>
            <AppInputText
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <AppTexts style={{ color: "red" }}>{errors.email}</AppTexts>
            )}

            <AppInputText
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              icon="lock"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <AppTexts style={{ color: "red" }}>{errors.password}</AppTexts>
            )}

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
