import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import MyDrawerNavigator from '@navigation/Drawer';
import globalStyles from '@theme/globalStyles';
import colors from '@constants/colors';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.primary} />
      <SafeAreaView style={[globalStyles.container, globalStyles.bgContainer]}>
          <NavigationContainer>
            <MyDrawerNavigator />
          </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

export default App;
