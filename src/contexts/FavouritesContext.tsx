import React, { useState, createContext, useEffect } from 'react';

import { getFavoriteMovies, getWatchlistMovies } from '@network/apiFunctions';
import { getMoviesId } from '@utility/dataFormatters';

const FavouritesContext = createContext<FavouritesContextValues>(
  {} as FavouritesContextValues,
);

function FavouritesContextProvider({ children }: { children: React.ReactNode }) {
  const [favouriteMovies, setFavouriteMovies] = useState<Array<string>>([]);
  const [watchlist, setWatchlist] = useState<Array<string>>([]);

  useEffect(() => {
    (async () => {
      const favouriteMovies = await getFavoriteMovies(1);
      const watchlist = await getWatchlistMovies(1);

      setFavouriteMovies(getMoviesId(favouriteMovies));
      setWatchlist(getMoviesId(watchlist));
    })();
  }, []);

  return (
    <FavouritesContext.Provider
      value={{
        favouriteMovies,
        setFavouriteMovies,
        watchlist,
        setWatchlist,
      }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export { FavouritesContextProvider, FavouritesContext };
