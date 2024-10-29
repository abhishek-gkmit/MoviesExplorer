import colors from '@constants/colors';
import { StyleSheet } from 'react-native';

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

  tabContainerFocused: {
    backgroundColor: '#0f0',
  },

  tabContainerUnFocused: {
    backgroundColor: 'white',
  },

  tabTitle: {
    color: 'gray',
    fontSize: 12,
  },

  tabTitleFocused: {
    position: 'absolute',
    top: 35,
    color: colors.primary,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
  },

  tabTitleUnFocused: {
    color: 'gray',
  },
});

export default styles;
