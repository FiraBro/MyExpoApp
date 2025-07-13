import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen from "./src/components/Screen"; // Capitalized

const Stack = createStackNavigator(); // Fixed typo

const Tweets = () => {
  return (
    <Screen>
      <View>
        <Text>Tweets</Text>
      </View>
    </Screen>
  );
};

const TweetsDetail = () => {
  return (
    <Screen>
      <View>
        <Text>TweetsDetail</Text>
      </View>
    </Screen>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TweetsDetail" component={TweetsDetail} />
      <Stack.Screen name="Tweets" component={Tweets} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
