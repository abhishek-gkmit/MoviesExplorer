import { ActivityIndicator, View } from 'react-native';

import colors from '@constants/colors';

import styles from './styles';

function Loader({ size, color }: CustomLoaderProps) {
  return (
    <View styles={styles.loaderContainer}>
      <ActivityIndicator
        size={size || 'large'}
        color={color || colors.primary}
        animating={true}
      />
    </View>
  );
}

export default Loader;
