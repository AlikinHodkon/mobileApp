import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserData } from "../userData";

export const UserStorageService = {
    storeData: async (value: UserData) => {
      try {
        await AsyncStorage.setItem('userData', JSON.stringify(value))
      } catch (error) {}
    },
    loadUserData: async (): Promise<UserData | null> => {
      const data = await AsyncStorage.getItem('userData');
      return data ? JSON.parse(data) : null;
    },
    handleLeave: async (setIsAuth: (value: boolean) => void) => {
      await AsyncStorage.removeItem('userData')
      setIsAuth(false)
    }
  };