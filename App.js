import { PaperProvider as Provider } from "react-native-paper"
import BottomTabNavigation from "./components/BottomTabNavigation";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AnimeDetailsCard from "./components/AnimeDetailsCard";

export default function App(){
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
          <Provider>
              <Stack.Navigator>
                <Stack.Screen name={"main"} component={BottomTabNavigation} options={{headerShown: false}}/>
                  <Stack.Screen name={"details"} component={AnimeDetailsCard} />
              </Stack.Navigator>
          </Provider>
      </NavigationContainer>
    );
}
