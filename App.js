import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen from "./src/components/Screen"; // Capitalized
import { Button } from "react-native";

const Stack = createStackNavigator(); // Fixed typo
const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetsDetail", { id: 1 })}
    />
  );
};
const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <View>
        <Text>Tweets</Text>
      </View>
      <Link />
    </Screen>
  );
};

const TweetsDetail = ({ route }) => {
  console.log(route);
  return (
    <Screen>
      <View>
        <Text>TweetsDetail{route.params.id}</Text>
      </View>
    </Screen>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetsDetail" component={TweetsDetail} />
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
