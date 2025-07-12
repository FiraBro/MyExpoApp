import { StyleSheet } from "react-native";
import React from "react";
import AppImageList from "./AppImageList";
import ErrorMessage from "../components/form/ErrorMessage";
import { useFormikContext } from "formik";

export default function FormImagePicker({ name }) {
  const { setFieldValue, touched, errors, values } = useFormikContext();
  console.log(values[name]);

  const handleAddImage = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemoveImage = (uriToRemove) => {
    setFieldValue(
      name,
      values[name].filter((uri) => uri !== uriToRemove)
    );
  };

  return (
    <>
      <AppImageList
        imageUris={values[name]}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <ErrorMessage error={touched[name] && errors[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
