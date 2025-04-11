import AsyncStorage from '@react-native-async-storage/async-storage'
import Checkbox from 'expo-checkbox'
import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { UserData } from '../../model/userData'
import { validateForm } from '../../model/auth/validateForm'
import { UserStorageService } from '../../model/auth/UserStorageService'

export const SignIn = ({ setIsAuth }: any) => {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    agreement: false,
  })
  const [activeTab, setActiveTab] = useState(true)
  const [isFormValid, setIsFormValid] = useState(false)

  const handlePress = (value: UserData) => {
    UserStorageService.storeData(value)
    setIsAuth(true)
  }

  useEffect(() => {
    validateForm(userData, setIsFormValid)
  }, [userData])

  return (
    <View style={SignInStyles.container}>
      <View style={SignInStyles.tabsWrapper}>
        <Button
          title='Log in'
          color={activeTab ? '#2196F3' : '#808080'}
          onPress={() => setActiveTab(true)}
        />
        <Button
          title='Registration'
          color={activeTab ? '#808080' : '#2196F3'}
          onPress={() => setActiveTab(false)}
        />
      </View>
      {activeTab ? (
        <View>
          <TextInput
            style={SignInStyles.input}
            onChangeText={(text: string) =>
              setUserData((prev) => ({ ...prev, name: text }))
            }
            value={userData.name}
            placeholder='Enter name'
          />
          <TextInput
            style={SignInStyles.input}
            onChangeText={(text: string) =>
              setUserData((prev) => ({ ...prev, password: text }))
            }
            value={userData.password}
            placeholder='Enter password'
            secureTextEntry
          />
          <Button
            onPress={() => handlePress(userData)}
            title='Sign in'
            disabled={!userData.name}
          />
        </View>
      ) : (
        <View>
          <TextInput
            style={SignInStyles.input}
            onChangeText={(text: string) =>
              setUserData((prev) => ({ ...prev, name: text }))
            }
            value={userData.name}
            placeholder='Enter name'
          />
          <TextInput
            style={SignInStyles.input}
            onChangeText={(text: string) =>
              setUserData((prev) => ({ ...prev, email: text }))
            }
            value={userData.email}
            placeholder='Enter email'
          />
          <TextInput
            style={SignInStyles.input}
            onChangeText={(text: string) =>
              setUserData((prev) => ({ ...prev, password: text }))
            }
            value={userData.password}
            placeholder='Enter password'
            secureTextEntry
          />
          <TextInput
            style={SignInStyles.input}
            onChangeText={(text: string) =>
              setUserData((prev) => ({
                ...prev,
                repeatPassword: text,
              }))
            }
            value={userData.repeatPassword}
            placeholder='Repeat password'
            secureTextEntry
          />
          <View style={SignInStyles.checkboxWrapper}>
            <Checkbox
              onValueChange={(check: boolean) =>
                setUserData((prev) => ({ ...prev, agreement: check }))
              }
              value={userData.agreement}
              color={userData.agreement ? '#2196F3' : ''}
            />
            <Text style={{ marginLeft: 5 }}>Agree with user agreement</Text>
          </View>
          <Button
            onPress={() => handlePress(userData)}
            title='Registrate'
            disabled={!isFormValid}
          />
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
  },
  checkboxWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: 220,
    justifyContent: 'center',
    marginBottom: 10,
  },
})
