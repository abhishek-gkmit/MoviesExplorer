interface Movie {
  id: string;
  name: string;
  releaseDate: string;
  thumbnailUrl: string;
  plot: string;
  genere: string;
}

interface MovieProps {
  movie: FormattedMovieData;
}

interface MovieListFooterProps {
  animating: boolean;
}
