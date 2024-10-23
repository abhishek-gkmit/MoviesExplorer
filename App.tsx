import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';

import DrawerNavigator from '@navigation/Drawer';

import globalStyles from '@styles/globalStyles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
