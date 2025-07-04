import { View } from "react-native";
import React from "react";
import WellCome from "./src/Screen/WellCome";
import ViewImage from "./src/Screen/ViewImage";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {" "}
      {/* <WellCome /> */}
      <ViewImage />
    </View>
  );
}
