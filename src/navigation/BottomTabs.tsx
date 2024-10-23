import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoviesStack from '@navigation/MoviesStack';
import Favourites from '@screens/favourites';

import ROUTES from '@constants/routes';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name={ROUTES.BottomTabs.MoviesStack}
        component={MoviesStack}
      />
      <BottomTabs.Screen
        name={ROUTES.BottomTabs.Favourites}
        component={Favourites}
      />
    </BottomTabs.Navigator>
  );
}

export default BottomTabsNavigator;
