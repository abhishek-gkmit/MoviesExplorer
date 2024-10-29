import React from 'react';
import { useEffect } from 'react';
import { useState, createContext } from 'react';

import storage from '@utility/asyncStorage';
import API from '@network/axiosInstance';
import { formatMovies, getMoviesId } from '@utility/dataFormatters';

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
      const favouriteMovies = await API.get('account/21588809/favorite/movies');
      const watchlist = await API.get('account/21588809/watchlist/movies');

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
