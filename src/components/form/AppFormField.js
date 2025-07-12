import React from "react";
import { useFormikContext } from "formik";
import AppInputText from "../AppInputText";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({ name, width, ...otherProps }) {
  const { handleBlur, touched, handleChange, errors, values } =
    useFormikContext();

  return (
    <>
      <AppInputText
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={touched[name] && errors[name]} />
    </>
  );
}
