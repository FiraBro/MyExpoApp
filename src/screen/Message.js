import { View, Text, FlatList, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessage = [
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
  const [message, setMessage] = useState(initialMessage);
  const [refeshing, setRefreshing] = useState(false);

  const handleDeleteMesaage = (item) => {
    setMessage(message.filter((m) => m.id !== item.id));
  };

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
            onPress={() => console.log("message", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDeleteMesaage(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refeshing}
        onRefresh={() =>
          setMessage([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../../assets/Logo.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}
