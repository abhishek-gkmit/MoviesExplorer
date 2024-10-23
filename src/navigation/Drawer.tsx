import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from '@navigation/BottomTabs';
import Profile from '@screens/profile';

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabs} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
