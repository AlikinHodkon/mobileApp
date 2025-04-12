import { UserData } from "../model/UserData"


export const validateForm = (userData: UserData, setIsFormValid: (value: boolean) => void) => {
    if (
      !userData.name ||
      !userData.email ||
      !userData.password ||
      !userData.repeatPassword ||
      userData.password !== userData.repeatPassword ||
      !userData.agreement
    ) {
      setIsFormValid(false)
      return
    }
    setIsFormValid(true)
  }