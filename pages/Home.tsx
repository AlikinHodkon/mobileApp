import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { UserData } from "./SignIn"

export const Home = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    password: ""
  })
  
  useEffect(() => {
    AsyncStorage.getItem('userData').then((data) => data !== null ? setUserData(JSON.parse(data)) : null)
  }, []) 

  return (
    <View style={HomeStyles.wrapper}>
        <Text>Welcome, {userData.name}</Text>
    </View>
  )
}

const HomeStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: 'auto',
    height: 'auto'
  }
})
