import colors from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  movieInfoContainer: {
    flex: 1,
  },

  movieInfoSubContainer: {
    padding: 10,
    gap: 10,
  },

  backdropContainer: {
    position: 'absolute',
    width: '100%',
    height: 200,
    zIndex: -1,
  },

  backdropImage: {
    width: '100%',
    height: 200,
  },

  posterContaienr: {
    zIndex: 1,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    shadowColor: colors.black4,
    shadowRadius: 10,
  },

  posterImage: {
    borderRadius: 10,
    shadowColor: colors.black4,
    shadowRadius: 10,
    width: 150,
    height: 200,
    zIndex: 1,
  },

  movieName: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 20,
    color: colors.primary,
    textAlign: 'center',
  },

  movieReleaseDate: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
    color: colors.primary,
    textAlign: 'center',
  },

  movieStats: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-around',
    elevation: 10,
    shadowRadius: 5,
    shadowColor: colors.black4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
  },

  movieStatContainer: {
    padding: 10,
    gap: 5,
  },

  movieStatHeading: {
    color: colors.gray,
    textAlign: 'center',
  },

  movieStatText: {
    color: colors.black,
    textAlign: 'center',
  },

  imagesContainer: {
    gap: 10,
  },

  movieExtraImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },

  plot: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: 14,
  },

  insightsHeading: {
    color: colors.black,
    fontSize: 18,
    marginBottom: 10,
  },

  similarListContentStyle: {
    gap: 10,
  },

  similarMoviesContainer: {
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: colors.black1,
    paddingTop: 5,
  },

  similarMoviesHeading: {
    color: colors.black,
    fontSize: 18,
  },

  activityIndicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  favouriteBtn: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: colors.black5,
    padding: 5,
    borderRadius: 10,
    zIndex: 10,
  },

  watchlistBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.black5,
    padding: 5,
    borderRadius: 10,
    zIndex: 10,
  },
});

export default styles;
