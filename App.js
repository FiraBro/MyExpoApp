import { View, Text } from "react-native";
import React from "react";
import Screen from "./src/components/Screen";
import LoginScreen from "./src/Screen/LoginScreen";
import ListingEditScreen from "./src/Screen/ListingEditScreen";

export default function App() {
  return (
    <Screen>
      {/* <LoginScreen /> */}
      <ListingEditScreen />
    </Screen>
  );
}
