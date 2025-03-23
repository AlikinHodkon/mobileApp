import { SignIn } from "./pages";
import { Tabs } from "./components";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";

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
    const [isAuth, setIsAuth] = useState(false)

    return (
      <>
        { 
          isAuth ? <Tabs setIsAuth={setIsAuth} /> 
          : <SignIn setIsAuth={setIsAuth} />
        } 
      </>
    )
}
