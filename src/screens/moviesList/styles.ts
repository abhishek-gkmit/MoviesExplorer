import colors from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  movieListContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.lightGray,
  },

  movieListContent: {
    gap: 10,
  },

  listHeader: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
