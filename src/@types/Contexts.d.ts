interface FavouritesContextValues {
  favouriteMovies: string[];
  watchlist: string[];
  setFavouriteMovies: (favouriteMovies: string[]) => void;
  setWatchlist: (watchlist: string[]) => void;
}
