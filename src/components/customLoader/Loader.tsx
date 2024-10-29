import { ActivityIndicator, View } from 'react-native';

import colors from '@constants/colors';

import styles from '@components/customLoader/styles.ts';

function Loader({ animating, isSmall, color }: CustomLoaderProps) {
  return (
    <View styles={styles.loaderContainer}>
      <ActivityIndicator
        size={isSmall ? 'small' : 'large'}
        color={color || colors.primary}
        animating={animating}
      />
    </View>
  );
}

export default Loader;
