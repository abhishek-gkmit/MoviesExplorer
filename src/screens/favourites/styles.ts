import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

const styles = StyleSheet.create({
  movieListContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.lightGray,
  },

  movieList: {},

  movieListContent: {
    gap: 10,
    paddingHorizontal: 10,
  },

  listHeader: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
