import {
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import API from '@network/axiosInstance';
import { formatMovies, trimText } from '@utility/dataFormatters';

import styles from '@screens/moviesList/styles';
import globalStyles from '@theme/globalStyles';
import TextWithIcon from '@components/textWithIcon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ROUTES from '@constants/routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const sample_data = [
  {
    id: '1000',
    name: 'Interstellar',
    releaseDate: '12-11-2014',
    thumbnailUrl:
      'https://m.media-amazon.com/images/M/MV5BNzc2MWUyYzctY2E4Ny00ZTlmLThjNTMtMTViZGI5NjcyN2EzXkEyXkFqcGc@._V1_.jpg',
    plot: 'Some random movie plot',
    genere: 'Sci-Fi',
  },
];

function Movie({ movie }: MovieProps) {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        MoviesStackParamList,
        typeof ROUTES.MoviesStack.MovieInfo
      >
    >();

  return (
    <TouchableOpacity
      style={styles.movieContainer}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate(ROUTES.MoviesStack.MovieInfo, {
          movieId: movie.id + '',
        })
      }>
      <Image
        source={{ uri: movie.posterUrl }}
        style={styles.posterImage}
        resizeMode="cover"
      />
      <View style={styles.movieDetailsContainer}>
        <View>
          <Text style={[globalStyles.colorBlack, styles.movieName]}>
            {movie.title}
          </Text>

          <Text style={[styles.moviePlot, globalStyles.colorBlack]}>
            {trimText(movie.plot, 200) + '...'}
          </Text>
        </View>

        <View style={styles.movieSubDetailsContainer}>
          <TextWithIcon
            icon={{ name: 'star', size: 16 }}
            text={movie.rating.toPrecision(2)}
            textStyle={styles.movieRating}
          />

          <TextWithIcon
            icon={{ name: 'calendar', size: 16 }}
            text={movie.releaseDate}
            textStyle={styles.movieReleaseDate}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

function MovieListFooter({ animating }: MovieListFooterProps) {
  return (
    <View>
      <ActivityIndicator animating={animating} />
    </View>
  );
}

function MoviesList({ navigation }: MoviesListScreenProps) {
  const [movies, setMovies] = useState<FormattedMovieData[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMovies = useCallback(
    async function loadMovies(page: number) {
      setLoading(true);
      const data = await API.get('movie/popular', { params: { page: page } });
      const formattedData = formatMovies(data);
      setMovies([...movies, ...formattedData]);
      setLoading(false);
    },
    [movies, setMovies],
  );

  useEffect(() => {
    loadMovies(page);
  }, [page]);

  useEffect(() => {
    loadMovies(1);
  }, []);

  return (
    <View style={styles.movieListContainer}>
      <FlatList
        keyExtractor={(item, index) => item.id + '' + index}
        data={movies}
        renderItem={({ item }) => <Movie movie={item} />}
        ListFooterComponent={<MovieListFooter animating={loading} />}
        style={styles.movieList}
        contentContainerStyle={styles.movieListContent}
        onEndReached={() => setPage(page => page + 1)}
      />
    </View>
  );
}

export default MoviesList;
