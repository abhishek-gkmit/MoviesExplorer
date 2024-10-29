import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    gap: 2,
    width: 150,
  },

  headingContainer: {
    flexDirection: 'row',
  },

  headingStyle: {
    color: colors.primary,
    fontSize: 16,
    width: '90%',
  },

  imageStyle: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
});

export default styles;
