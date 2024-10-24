import colors from '@constants/colors';
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgContainer: {
    backgroundColor: colors.white,
  },

  justifiedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  screenHeading: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 5,
    backgroundColor: colors.fourth,
  },

  colorBlack: {
    color: colors.black,
  },
});

export default globalStyles;
