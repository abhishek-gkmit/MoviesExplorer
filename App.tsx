import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import MyDrawerNavigator from '@navigation/Drawer';

import globalStyles from '@theme/globalStyles';
import { ThemeAndStorageContextProvider } from '@contexts/ThemeAndStorageContext';
import colors from '@constants/colors';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.primary} />
      <SafeAreaView style={[globalStyles.container, globalStyles.bgContainer]}>
        <ThemeAndStorageContextProvider>
          <NavigationContainer>
            <MyDrawerNavigator />
          </NavigationContainer>
        </ThemeAndStorageContextProvider>
      </SafeAreaView>
    </>
  );
}

export default App;
