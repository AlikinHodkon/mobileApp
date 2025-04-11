import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from '../screens/Main'
import { News } from './News'
import { Following } from '../screens/Following'

const Tab = createBottomTabNavigator()

export const Tabs = ({ setIsAuth }: any) => (
  <Tab.Navigator>
    <Tab.Screen
      name='Main'
      children={() => <Main setIsAuth={setIsAuth} />}
      options={{
        headerShown: false,
      }}
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
