import { StyleSheet } from 'react-native';

import colors from '@constants/colors';

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
    fontFamily: fontFamily.regular,
    fontSize: fontSize.twenty,
    color: colors.primary,
    textAlign: 'center',
  },

  movieReleaseDate: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.fourteen,
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

  insightsHeading: {
    color: colors.black,
    fontSize: fontSize.eighteen,
    marginBottom: 5,
  },

  similarListContentStyle: {
    gap: 10,
  },

  similarMoviesContainer: {
    gap: 10,
    borderTopWidth: 1,
    borderTopColor: colors.black2,
    paddingTop: 5,
  },

  similarMoviesHeading: {
    color: colors.black,
    fontSize: fontSize.eighteen,
  },

  activityIndicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
