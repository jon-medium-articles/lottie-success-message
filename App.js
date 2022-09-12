import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ActionScreen } from "./screens/ActionScreen";
import { SuccessMessageScreen } from "./screens/SuccessMessageScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Action" component={ActionScreen} />
        <Stack.Screen name="SuccessMessage" component={SuccessMessageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
