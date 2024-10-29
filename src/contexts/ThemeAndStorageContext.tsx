import React, { useState, createContext, useEffect } from 'react';

import { getFavoriteMovies, getWatchlistMovies } from '@network/apiFunctions';
import { getMoviesId } from '@utility/dataFormatters';

const ThemeAndStorageContext = createContext<ThemeAndStorageContextValues>(
  {} as ThemeAndStorageContextValues,
);

function ThemeAndStorageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <ThemeAndStorageContext.Provider
      value={{
        favouriteMovies,
        setFavouriteMovies,
        watchlist,
        setWatchlist,
      }}>
      {children}
    </ThemeAndStorageContext.Provider>
  );
}

export { ThemeAndStorageContextProvider, ThemeAndStorageContext };
