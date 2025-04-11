import { useState } from 'react'
import { Tabs } from './view/components/Tabs'
import { SignIn } from './view/screens/SignIn'
import { useAuthViewModel } from './viewmodel/hooks/useAuthViewModal'
import { ActivityIndicator } from 'react-native'

type RootStackParamList = {
  Main: undefined
  Article: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export function Router() {
  const { isAuth, setIsAuth, isLoading } = useAuthViewModel()

  if (isLoading) return <ActivityIndicator size={'large'} />

  return (
    <>
      {isAuth ? (
        <Tabs setIsAuth={setIsAuth} />
      ) : (
        <SignIn setIsAuth={setIsAuth} />
      )}
    </>
  )
}
