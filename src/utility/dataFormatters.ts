import { AxiosResponse } from 'axios';

const ORIGINAL_IMAGE = 'https://image.tmdb.org/t/p/original';
const W500_IMAGE = 'https://image.tmdb.org/t/p/w500';

function formatMovies(data: any) {
  const results: RawMovieData[] = data?.results;
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

function trimText(text: string, length: number) {
  if (text.length <= length) {
    return text;
  }

  return text.slice(0, length);
}

export { formatMovies, trimText };
