import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Following, Home, News } from '../pages'

const Tab = createBottomTabNavigator()

export const Tabs = ({ setIsAuth }: any) => (
  <Tab.Navigator>
    <Tab.Screen
      name='Home'
      children={() => <Home setIsAuth={setIsAuth} />}
      options={{ title: 'More For You' }}
    />
    <Tab.Screen
      name='News+'
      component={News}
    />
    <Tab.Screen
      name='Following'
      component={Following}
    />
  </Tab.Navigator>
)
