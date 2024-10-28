import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

const styles = StyleSheet.create({
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },

  posterImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },

  movieDetailsContainer: {
    flex: 1,
    gap: 5,
    justifyContent: 'space-between',
  },

  movieSubDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  movieName: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '500',
  },

  moviePlot: {
    textAlign: 'left',
  },

  movieRating: {
    fontSize: 16,
  },

  movieReleaseDate: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
