import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "./src/Screen/ListingScreen";
import ListingEditScreen from "./src/Screen/ListingEditScreen";
import OffLineSupport from "./src/components/OffLineSupport";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <OffLineSupport />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Listings" component={ListingScreen} />
          <Stack.Screen name="EditListing" component={ListingEditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
