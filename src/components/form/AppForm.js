import { View, Text } from "react-native";
import React from "react";
import { Formik } from "formik";

export default function AppForm({ children, validationSchema }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {children}
    </Formik>
  );
}
