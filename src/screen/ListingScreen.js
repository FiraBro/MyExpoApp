import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Card from "../components/Card";
import AppTexts from "../components/AppTexts";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

export default function ListingScreen() {
  const { data: listing, loading, error, request: getListings } = useApi();
  // console.log(listing)

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
      {/* <ActivityIndicator visible={true} /> */}

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
