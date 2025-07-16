import { StyleSheet } from "react-native";
import * as yup from "yup";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
import Category from "../components/Category";
import FormImagePicker from "../components/FormImagePicker";
import AppFormPicker from "../components/AppFormPicker";
import Listing from "../api/Listing";
import useLocation from "../hooks/useLocation";
import { useState } from "react";
import UploadScreen from "../components/UploadScreen";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.number().required().min(1).max(10000).label("Price"),
  category: yup.object().required().nullable().label("Category"),
  description: yup.string().label("Description"),
  images: yup.array().min(1, "Please select at least one image"),
});

const listingItem = [
  { label: "Farniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Jack", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Tshirt", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Name", value: 4, backgroundColor: "gold", icon: "apps" },
];

export default function ListingEditScreen() {
  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);

  const location = useLocation();

  // const addListing = async (products) => {
  //   setProgress(0);
  //   setUploadVisible(true);

  //   const result = await Listing.addListing(products, (progress) =>
  //     setProgress(progress)
  //   );

  //   if (!result.ok) {
  //     setUploadVisible(false);
  //     return alert("Not submitted");
  //   }

  // };

  const addListing = async (products, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);

    const result = await Listing.addListing(products, (progress) =>
      setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Not submitted");
    }

    // ✅ Wait for animation
    setTimeout(() => {
      setUploadVisible(false);
      resetForm(); // optional: clear form
    }, 2000); // 2 seconds so animation can play
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        visible={uploadVisible}
        progress={progress}
        onDone={() => setUploadVisible(false)}
      />

      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={addListing}
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
