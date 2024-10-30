const ApiConstants = {
  API_BASE_URL: process.env.API_BASE_URL,
  API_VERSION: process.env.API_VERSION,
  ACCOUNT_ID: process.env.ACCOUNT_ID,
  API_ENDPOINTS: {
    discover: 'discover/movie',
    search: 'search/movie',
    favouriteMovies: `account/${process.env.ACCOUNT_ID}/favorite/movies`,
    watchlistMovies: `account/${process.env.ACCOUNT_ID}/watchlist/movies`,
    similarMovies: 'movie/MOVIE_ID/similar',
    movieInfo: 'movie/MOVIE_ID',
    movieImages: 'movie/MOVIE_ID/images',
    favorite: `account/${process.env.ACCOUNT_ID}/favorite`,
    watchlist: `account/${process.env.ACCOUNT_ID}/watchlist`,
  },
};

export default ApiConstants;
