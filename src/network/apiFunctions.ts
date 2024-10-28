import axiosInstance from '@network/axiosInstance';
import {
  formatMovieImages,
  formatMovieInfo,
  formatMovies,
} from '@utility/dataFormatters';

async function getPopularMovies(page: number) {
  const data = await axiosInstance.get('discover/movie', { params: { page } });

  return formatMovies(data);
}

async function searchMovies(query: string, page: number) {
  const data = await axiosInstance.get('search/movie', {
    params: { query, page: page + '' },
  });

  return formatMovies(data);
}

async function getFavoriteMovies(page: number) {
  const data = await axiosInstance.get(
    `account/${process.env.ACCOUNT_ID}/favorite/movies`,
    { params: { page } },
  );

  return formatMovies(data);
}

async function getSimiliarMovies(movieId: string, page: number) {
  if (!movieId || movieId === 'undefined') {
    return [];
  }

  console.log(`movie/${movieId}/similar`);
  const data = await axiosInstance.get(`movie/${movieId}/similar`, {
    params: { page },
  });

  return formatMovies(data);
}

async function getMovieInfo(movieId: string) {
  const data = (await axiosInstance.get(`movie/${movieId}`)) as RawMovieInfo;

  return formatMovieInfo(data);
}

async function getMovieImages(movieId: string) {
  const images = (await axiosInstance.get(`movie/${movieId}/images`)) as any;

  return formatMovieImages(images?.backdrops);
}

async function addToFavourites(movieId: string) {
  await axiosInstance.post(
    `account/${process.env.ACCOUNT_ID}/favorite`,
    { media_id: +movieId, media_type: 'movie', favorite: true },
  );
}

async function removeFromFavourites(movieId: string) {
  await axiosInstance.post(
    `account/${process.env.ACCOUNT_ID}/favorite`,
    { media_id: +movieId, media_type: 'movie', favorite: false },
  );
}

async function addToWatchlist(movieId: string) {
  const res = await axiosInstance.post(
    `account/${process.env.ACCOUNT_ID}/watchlist`,
    { media_id: +movieId, media_type: 'movie', watchlist: true },
  );

  if (!res.data?.success) {
    console.error(`Failed to add movie: ${movieId} into watchlist`);
  }
}

async function removeFromWatchlist(movieId: string) {
  const res = await axiosInstance.post(
    `account/${process.env.ACCOUNT_ID}/watchlist`,
    { media_id: +movieId, media_type: 'movie', watchlist: false },
  );

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
