import React from "react";
import { useFormikContext } from "formik";
import AppInputText from "../AppInputText";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({
  name,
  width,
  PickerItemComponent,
  ...otherProps
}) {
  const { handleBlur, touched, handleChange, errors, values } =
    useFormikContext();

  return (
    <>
      <AppInputText
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        PickerItemComponent
        value={values[name]}
        {...otherProps}
        width={width}
      />
      {touched[name] && errors[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
}
