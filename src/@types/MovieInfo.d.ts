interface Genere {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
}

interface RawMovieInfo {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genere[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface FormattedMovieInfo {
  title: string;
  backdropUrl: string;
  genres: Genere[];
  id: number;
  plot: string;
  posterUrl: string;
  releaseDate: string;
  runtime: number;
  status: string;
  rating: number;
  ratingCount: number;
  revenue?: number;
}

interface MovieStatsProps {
  rating: number;
  ratingCount: number;
  runtime: number;
}

interface MovieImagesProps {
  images: string[];
}
