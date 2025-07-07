import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Card from "../components/Card";

const listingItem = [
  {
    title: "Fira jacket",
    id: 1,
    image: require("../../assets/Logo.jpg"),
    price: 100,
  },
  {
    title: "Fira jacket",
    id: 2,
    image: require("../../assets/Logo.jpg"),
    price: 1000,
  },
];
export default function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listingItem}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            tittle={item.title}
            subTittle={"$" + item.price}
            image={item.image}
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
