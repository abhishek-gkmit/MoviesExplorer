import colors from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  movieListContainer: {
    flex: 1,
    padding: 10,
  },

  movieList: {},

  movieListContent: {
    gap: 10,
  },

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
  },
});

export default styles;
