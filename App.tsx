import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';

import MyDrawerNavigator from '@navigation/Drawer';

import globalStyles from '@theme/globalStyles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={globalStyles.container}>
      <NavigationContainer>
        <MyDrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
