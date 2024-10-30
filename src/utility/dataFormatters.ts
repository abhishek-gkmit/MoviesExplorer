const ORIGINAL_IMAGE = 'https://image.tmdb.org/t/p/original';
const W500_IMAGE = 'https://image.tmdb.org/t/p/w500';

function formatMovies(data: any) {
  const results: RawMovieData[] = data?.results;

  if (!results) {
    return [];
  }

  const formattedMovies: FormattedMovieData[] = results.map(function format({
    id,
    title,
    overview,
    popularity,
    poster_path,
    vote_average,
    release_date,
  }) {
    return {
      id,
      title,
      plot: overview,
      popularity,
      posterUrl: W500_IMAGE + poster_path,
      rating: vote_average,
      releaseDate: release_date,
    };
  });

  return formattedMovies;
}

function getMoviesId(data: any) {
  const results: RawMovieData[] = data?.results;

  if (!results) {
    return [];
  }

  const formattedMovies: string[] = results.map(function format({ id }) {
    return id + '';
  });

  return formattedMovies;
}

function formatMovieInfo({
  id,
  title,
  backdrop_path,
  genres,
  overview,
  poster_path,
  release_date,
  runtime,
  status,
  vote_count,
  vote_average,
}: RawMovieInfo): FormattedMovieInfo {
  return {
    id,
    title,
    runtime,
    status,
    backdropUrl: W500_IMAGE + backdrop_path,
    genres: [...genres],
    plot: overview,
    posterUrl: W500_IMAGE + poster_path,
    releaseDate: release_date,
    rating: vote_average,
    ratingCount: vote_count,
  };
}

function formatMovieImages(movieImages: Array<any>) {
  movieImages = movieImages.slice(0, 10);

  return movieImages.map(imageData => {
    return W500_IMAGE + imageData?.file_path;
  });
}

function trimText(text: string, length: number) {
  if (text.length <= length) {
    return text;
  }

  return text.slice(0, length);
}

export {
  formatMovies,
  formatMovieInfo,
  formatMovieImages,
  trimText,
  getMoviesId,
};
