import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as yup from "yup";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
import Category from "../components/Category";
import FormImagePicker from "../components/FormImagePicker";
import AppFormPicker from "../components/AppFormPicker";
const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.number().required().min(1).max(10000).label("Price"),
  category: yup.object().required().nullable().label("Category"),
  description: yup.string().label("Description"),
  images: yup.array().min(1, "please select at least one image"),
});

const listingItem = [
  { label: "Farniture", value: 100, backgroundColor: "red", icon: "apps" },
  { label: "Jack", value: 100, backgroundColor: "green", icon: "email" },
  { label: "Tshirt", value: 100, backgroundColor: "blue", icon: "lock" },
  { label: "Name", value: 100, backgroundColor: "gold", icon: "apps" },
];
export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(value) => console.log(value)}
      >
        <>
          <FormImagePicker name="images" />
          <AppFormField name="title" placeholder="Title" maxLength={225} />
          <AppFormField
            name="price"
            placeholder="Price"
            maxLength={8}
            keyboardType="numeric"
            width={120}
          />
          <AppFormPicker
            items={listingItem}
            placeholder="Category"
            name="category"
            numColumns={4}
            width="50%"
            ItemPickerComponent={Category}
          />

          <AppFormField
            name="description"
            placeholder="Description"
            maxLength={225}
          />
          <SubmitButton title="Post" />
        </>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
