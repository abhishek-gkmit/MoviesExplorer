import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabs from '@navigation/BottomTabs';
import CustomDrawerHeader from '@components/customDrawerHeader';
import FavouritesContextProvider from '@contexts/FavouritesContext';

const Drawer = createDrawerNavigator<DrawerParamList>();

function MyDrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ header: CustomDrawerHeader }}>
      <FavouritesContextProvider>
        <Drawer.Screen
          name="Home"
          component={BottomTabs}
          options={{ headerTitle: 'Movies' }}
        />
      </FavouritesContextProvider>
    </Drawer.Navigator>
  );
}

export default MyDrawerNavigator;
