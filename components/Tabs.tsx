import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Following, Home, News } from '../pages';

const Tab = createBottomTabNavigator();

export const Tabs = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{title: 'More For You'}} />
      <Tab.Screen name="News+" component={News} />
      <Tab.Screen name="Following" component={Following} />
    </Tab.Navigator>
);
