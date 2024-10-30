import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoviesStack from '@navigation/MoviesStack';
import Favourites from '@screens/favourites';

import BottomTabBar from '@components/customBottomTabBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ROUTES from '@constants/routes';
import colors from '@constants/colors';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={BottomTabBar}>
      <BottomTabs.Screen
        name={ROUTES.BottomTabs.MoviesStack}
        component={MoviesStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="movie"
              color={focused ? colors.primary : colors.gray}
              size={focused ? 36 : 24}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name={ROUTES.BottomTabs.Favourites}
        component={Favourites}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="heart"
              color={focused ? colors.primary : colors.gray}
              size={focused ? 36 : 24}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default BottomTabsNavigator;
