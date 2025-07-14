import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Card from "../components/Card";
import Listing from "../api/Listing";
import AppTexts from "../components/AppTexts";
import AppButton from "../components/AppButton";

export default function ListingScreen() {
  const [listing, setListing] = useState([]);
  const [error, setError] = useState(false);

  const getListings = async () => {
    const response = await Listing();
    console.log("Response:", response.data);
    if (response.ok) setListing(response.data);
    else setError(response.problem);
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppTexts>Cannot Find Listing Items.</AppTexts>
          <AppButton title="Retry" onPress={getListings} />
        </>
      )}
      <FlatList
        data={listing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTittle={"$" + item.price}
            image={item.images[0]}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});
