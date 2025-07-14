import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Card from "../components/Card";
import Listing from "../api/Listing";

export default function ListingScreen() {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    const getListings = async () => {
      const response = await Listing();
      console.log("Response:", response.data);
      if (response.ok) setListing(response.data);
      else console.warn("API failed:", response.problem);
    };

    getListings();
  }, []);

  return (
    <Screen style={styles.screen}>
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
