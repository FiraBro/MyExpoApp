import { View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "./src/components/Screen";
import AccountScreen from "./src/Screen/AccountScreen";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen style={{ flex: 1 }}>
     
        <AccountScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}
