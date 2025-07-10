import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as yup from "yup";
import Screen from "../components/Screen";
import { AppForm, AppFormField } from "../components/form";
import AppPicker from "../components/AppPicker";
import AppButton from "../components/AppButton";
const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.number().required().min(1).max(10000).label("Price"),
  category: yup.object().required().nullable().label("Category"),
  description: yup.string().label("Description"),
});

const listingItem = [
  { label: "Farniture", value: 100 },
  { label: "Jack", value: 100 },
  { label: "Tshirt", value: 100 },
  { label: "Name", value: 100 },
];
export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValue={{ title: "", price: "", category: null, description: "" }}
        validationSchema={validationSchema}
        onSubmit={(value) => console.log(value)}
      >
        <>
          <AppFormField name="title" placeholder="Title" maxLength={225} />
          <AppFormField
            name="price"
            placeholder="Price"
            maxLength={8}
            keyboardType="numeric"
            width={120}
          />
          <AppPicker
            items={listingItem}
            placeholder="Category"
            name="category"
            onSelectedItem={(item) => console.log(item)}
            width="50%"
          />
          <AppFormField
            name="description"
            placeholder="Description"
            maxLength={225}
          />
          <AppButton title="Post" onPress={() => console.log("value")} />
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
