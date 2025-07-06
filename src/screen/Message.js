import { View, Text, FlatList } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const message = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/Logo.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/Logo.jpg"),
  },
];

export default function Message() {
  return (
    <Screen>
      <FlatList
        data={message}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
