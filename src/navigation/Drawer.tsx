import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from '@navigation/BottomTabs';
import Profile from '@screens/profile';
import colors from '@constants/colors';
import CustomDrawerHeader from '@components/customDrawerHeader';

const Drawer = createDrawerNavigator<DrawerParamList>();

function MyDrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ header: CustomDrawerHeader }}>
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{ headerTitle: 'Movies' }}
      />
      {/*<Drawer.Screen name="Profile" component={Profile} />*/}
    </Drawer.Navigator>
  );
}

export default MyDrawerNavigator;
