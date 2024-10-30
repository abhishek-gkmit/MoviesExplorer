import colors from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },

  textStyle: {
    color: colors.black,
    fontSize: 14,
  },
});

export default styles;
