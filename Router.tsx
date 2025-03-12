import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SignIn } from "./pages";
import { Tabs } from "./components";

type RootStackParamList = {
    Main: undefined;
    SignIn: undefined;
  };

declare global {
  namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
  }
}

export function Router() {
    const Stack = createNativeStackNavigator<RootStackParamList>()
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Main" component={Tabs} />
        </Stack.Navigator>
    )
}
