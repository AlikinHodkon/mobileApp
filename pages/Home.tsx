import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { UserData } from "./SignIn"

export const Home = ({setIsAuth}: any) => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    password: ""
  })
  
  useEffect(() => {
    AsyncStorage.getItem('userData').then((data) => data !== null ? setUserData(JSON.parse(data)) : null)
  }, [])
  
  const handleLeave = async () => {
    await AsyncStorage.removeItem('userData')
    setIsAuth(false)
  }


  return (
    <View>
      <View style={HomeStyles.wrapper}>
          <Text style={HomeStyles.header}>Welcome, {userData.name}</Text>
          <Button onPress={handleLeave} title="Leave" />
      </View>
    </View>
  )
}

const HomeStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: 'auto',
    height: '100%'
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 5
  }
})
