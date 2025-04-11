import { createStackNavigator } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Home } from './Home'
import { Article } from './Article'

export default function Main({ setIsAuth }: any) {
  const Stack = createStackNavigator()
  const [articleContent, setArticleContent] = useState({})
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        children={() => (
          <Home
            setIsAuth={setIsAuth}
            setArticleContent={setArticleContent}
          />
        )}
      />
      <Stack.Screen
        name='Article'
        children={() => <Article articleContent={articleContent} />}
      />
    </Stack.Navigator>
  )
}
