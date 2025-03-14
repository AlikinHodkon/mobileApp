import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export type UserData = {
    name: string
    email: string
    password: string
}

export const SignIn = ({setIsAuth}: any) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [activeTab, setActiveTab] = useState(true)
  const [isFormValid, setIsFormValid] = useState(false)

  const handlePress = (value: UserData) => {
    storeData(value)
    setIsAuth(true)
  }

  useEffect(() => {
    AsyncStorage.getItem('userData').then((data) => data ? setIsAuth(true) : setIsAuth(false))
  }, [])

  useEffect(() => {
    validateForm();
  }, [name, email, password, repeatPassword]);

  const validateForm = () => {
      if (!name || !email || !password || !repeatPassword || password !== repeatPassword) {
          setIsFormValid(false)
          return
      }
      setIsFormValid(true)
  };

  const storeData = async (value: UserData) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(value))
    } catch (error) {
      
    }
  }

  return (
    <View style={SignInStyles.container}>
      <View style={SignInStyles.tabsWrapper}>
        <Button title='Log in' color={activeTab ? '#2196F3' : '#808080'} onPress={() => setActiveTab(true)} />
        <Button title='Registration' color={activeTab ? '#808080' : '#2196F3'} onPress={() => setActiveTab(false)} />
      </View>
      {activeTab ? (
        <View>
          <TextInput style={SignInStyles.input} onChangeText={setName} value={name} placeholder='Enter name' />
          <TextInput style={SignInStyles.input} onChangeText={setPassword} value={password} placeholder='Enter password' secureTextEntry />
          <Button onPress={() => handlePress({name: name, email: email, password: password})} title='Sign in' disabled={true} />
        </View>
      ) : (
        <View>
          <TextInput style={SignInStyles.input} onChangeText={setName} value={name} placeholder='Enter name' />     
          <TextInput style={SignInStyles.input} onChangeText={setEmail} value={email} placeholder='Enter email' />
          <TextInput style={SignInStyles.input} onChangeText={setPassword} value={password} placeholder='Enter password' secureTextEntry />
          <TextInput style={SignInStyles.input} onChangeText={setRepeatPassword} value={repeatPassword} placeholder='Repeat password' secureTextEntry />
          <Button onPress={() => handlePress({name: name, email: email, password: password})} title='Registrate' disabled={!isFormValid} /> 
        </View>
      )}
    </View>
  )
}

const SignInStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: 220,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    tabsWrapper: {
      display: 'flex',
      flexDirection: 'row',
    }
});
