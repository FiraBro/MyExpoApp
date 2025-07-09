import { StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppInputText from "./AppInputText";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({ name, ...otherProps }) {
  const { handleBlur, touched, handleChange, errors, values } =
    useFormikContext();

  return (
    <>
      <AppInputText
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        {...otherProps}
      />
      {touched[name] && errors[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
}

const styles = StyleSheet.create({});
