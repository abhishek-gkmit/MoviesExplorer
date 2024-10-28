import axiosInstance from '@network/axiosInstance';
import {
  formatMovieImages,
  formatMovieInfo,
  formatMovies,
} from '@utility/dataFormatters';
import API_URLS from '@constants/apiUrls';

async function getPopularMovies(page: number) {
  const data = await axiosInstance.get(API_URLS.discover, { params: { page } });

  return formatMovies(data);
}

async function searchMovies(query: string, page: number) {
  const data = await axiosInstance.get(API_URLS.search, {
    params: { query, page: page + '' },
  });

  return formatMovies(data);
}

async function getFavoriteMovies(page: number) {
  const data = await axiosInstance.get(API_URLS.favouriteMovies, {
    params: { page },
  });

  return formatMovies(data);
}

async function getSimiliarMovies(movieId: string, page: number) {
  if (!movieId || movieId === 'undefined') {
    return [];
  }

  const data = await axiosInstance.get(
    API_URLS.similarMovies.replace('MOVIE_ID', movieId),
    { params: { page } },
  );

  return formatMovies(data);
}

async function getMovieInfo(movieId: string) {
  const data = (await axiosInstance.get(
    API_URLS.movieInfo.replace('MOVIE_ID', movieId),
  )) as RawMovieInfo;

  return formatMovieInfo(data);
}

async function getMovieImages(movieId: string) {
  const images = (await axiosInstance.get(
    API_URLS.movieImages.replace('MOVIE_ID', movieId),
  )) as any;

  return formatMovieImages(images?.backdrops);
}

async function addToFavourites(movieId: string) {
  await axiosInstance.post(API_URLS.favorite, {
    media_id: +movieId,
    media_type: 'movie',
    favorite: true,
  });
}

async function removeFromFavourites(movieId: string) {
  await axiosInstance.post(API_URLS.favorite, {
    media_id: +movieId,
    media_type: 'movie',
    favorite: false,
  });
}

async function addToWatchlist(movieId: string) {
  const res = await axiosInstance.post(API_URLS.watchlist, {
    media_id: +movieId,
    media_type: 'movie',
    watchlist: true,
  });

  if (!res.data?.success) {
    console.error(`Failed to add movie: ${movieId} into watchlist`);
  }
}

async function removeFromWatchlist(movieId: string) {
  const res = await axiosInstance.post(API_URLS.watchlist, {
    media_id: +movieId,
    media_type: 'movie',
    watchlist: false,
  });

  if (!res.data?.success) {
    console.error(`Failed to remove movie: ${movieId} from watchlist`);
  }
}

export {
  getPopularMovies,
  searchMovies,
  getFavoriteMovies,
  getSimiliarMovies,
  getMovieInfo,
  getMovieImages,
  addToWatchlist,
  removeFromWatchlist,
  addToFavourites,
  removeFromFavourites,
};
