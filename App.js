// import { View, Text } from "react-native";
// import React from "react";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Screen from "./src/components/Screen"; // Capitalized
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Button } from "react-native";

// const l = [
//   {
//     id:1,
//     title:'jacket',
//     images:[
//       {
//         url:"https://via.placeholder.com/150",
//         thumbnailUrl:"https://via.placeholder.com/150"
//       }
//     ],
//     categoryId:5,
//     price:100,
//     location:{
//       latitude:37.78825,
//       longitude:-122.4324
//     }

//   }
// ]

// const Stack = createStackNavigator(); // Fixed typo
// const Tab = createBottomTabNavigator();

// const Account = () => {
//   return (
//     <Screen>
//       <View>Account</View>
//     </Screen>
//   );
// };
// const Feed = () => {
//   return (
//     <Screen>
//       <View>Feed</View>
//     </Screen>
//   );
// };
// const TabNavigation = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={Feed} />
//       <Tab.Screen name="Account" component={Account} />
//     </Tab.Navigator>
//   );
// };
// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button
//       title="View Tweet"
//       onPress={() => navigation.navigate("TweetsDetail", { id: 1 })}
//     />
//   );
// };
// const Tweets = ({ navigation }) => {
//   return (
//     <Screen>
//       <View>
//         <Text>Tweets</Text>
//       </View>
//       <Link />
//     </Screen>
//   );
// };

// const TweetsDetail = ({ route }) => {
//   console.log(route);
//   return (
//     <Screen>
//       <View>
//         <Text>TweetsDetail{route.params.id}</Text>
//       </View>
//     </Screen>
//   );
// };

// const StackNavigator = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{ headerStyle: { backgroundColor: "gold" } }}
//     >
//       <Stack.Screen name="Tweets" component={Tweets} />
//       <Stack.Screen name="TweetsDetail" component={TweetsDetail} />
//     </Stack.Navigator>
//   );
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       {/* <StackNavigator /> */}
//       <TabNavigation />
//     </NavigationContainer>
//   );
// }

import { View, Text } from "react-native";
import React from "react";
import Screen from "./src/components/Screen";
import ListingScreen from "./src/Screen/ListingScreen";
export default function App() {
  return (
    <Screen>
      <ListingScreen />
    </Screen>
  );
}
