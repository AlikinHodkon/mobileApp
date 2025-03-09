import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home, SignIn } from "./pages";

type RootStackParamList = {
    Home: undefined;
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
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}
