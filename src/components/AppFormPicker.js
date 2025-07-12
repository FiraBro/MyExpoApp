import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../components/AppPicker";
import ErrorMessage from "../components/form/ErrorMessage";

export default function AppFormPicker({
  items,
  name,
  width,
  placeholder,
  numColumns,
  ItemPickerComponent,
}) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        selectedItem={values[name]} // Show selected item from Formik
        onSelectItem={(item) => setFieldValue(name, item)} // Set Formik value on selection
        width={width}
        numColumns={numColumns}
        ItemPickerComponent={ItemPickerComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
