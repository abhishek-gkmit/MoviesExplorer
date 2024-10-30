import { StyleSheet } from 'react-native';

import fontSize from '@constants/fonts';
import colors from '@constants/colors';

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: 60,
  },

  tabContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
  },

  tab: {
    flex: 1,
    borderRadius: 20,
  },

  tabFocused: {
    position: 'absolute',
    padding: 10,
    borderRadius: 40,
    top: -5,
  },

  tabTitle: {
    color: colors.gray,
    fontSize: fontSize.twelve,
  },

  tabTitleFocused: {
    position: 'absolute',
    top: 35,
    color: colors.primary,
    fontSize: fontSize.fourteen,
    fontWeight: '500',
    marginTop: 2,
  },
});

export default styles;
