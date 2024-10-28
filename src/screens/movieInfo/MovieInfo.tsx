import { useEffect, useState, useCallback, useContext, memo } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import uuid from 'react-native-uuid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ROUTES from '@constants/routes';

import TextWithIcon from '@components/textWithIcon';
import MovieCard from '@components/movieCard';
import { ThemeAndStorageContext } from '@contexts/ThemeAndStorageContext';
import colors from '@constants/colors';
import {
  addToFavourites,
  addToWatchlist,
  getMovieImages,
  getMovieInfo,
  getSimiliarMovies,
  removeFromFavourites,
  removeFromWatchlist,
} from '@network/apiFunctions';

import styles from '@screens/movieInfo/styles';
import { ImageLoadingIndicator } from '@assets/images';

const defaultData: FormattedMovieInfo = {
  title: 'Example',
  backdropUrl: ImageLoadingIndicator,
  genres: [],
  id: 1000,
  plot: 'Plot',
  posterUrl: ImageLoadingIndicator,
  releaseDate: '',
  runtime: 0,
  status: '',
  rating: 0,
  ratingCount: 0,
  revenue: 0,
};

function MovieInfo() {
  const { params } =
    useRoute<
      RouteProp<MoviesStackParamList, typeof ROUTES.MoviesStack.MovieInfo>
    >();

  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        MoviesStackParamList,
        typeof ROUTES.MoviesStack.MovieInfo
      >
    >();

  const [movieInfo, setMovieInfo] = useState<FormattedMovieInfo>({} as any);
  const [movieImages, setMovieImages] = useState<string[]>([]);
  const [similarMovies, setSimilarMovies] = useState<FormattedMovieData[]>([]);

  const [page, setPage] = useState(1);

  const [isFavourite, setIsFavourite] = useState(false);
  const [inWatchlist, setInWatchlist] = useState(false);

  const { favouriteMovies, setFavouriteMovies, watchlist, setWatchlist } =
    useContext(ThemeAndStorageContext);

  const loadSimilarMovies = useCallback(
    async function loadSimilarMovies(page: number) {
      console.log('loadSimilarMovies>>>>>>>>');
      const newSimilarMovies = await getSimiliarMovies(movieInfo.id + '', page);
      setSimilarMovies([...similarMovies, ...newSimilarMovies]);
    },
    [similarMovies, setSimilarMovies],
  );

  const addToFavouritesWrapper = useCallback(
    (movieId: string) => {
      addToFavourites(movieId);
      setFavouriteMovies([...favouriteMovies, movieId]);
    },
    [favouriteMovies, setFavouriteMovies],
  );

  const removeFromFavouritesWrapper = useCallback(
    (movieId: string) => {
      setFavouriteMovies(favouriteMovies.filter(id => id !== movieId));

      removeFromFavourites(movieId);
    },
    [favouriteMovies, setFavouriteMovies],
  );

  const addToWatchlistWrapper = useCallback(
    (movieId: string) => {
      addToWatchlist(movieId);

      setWatchlist([...watchlist, movieId]);
    },
    [watchlist, setWatchlist],
  );

  const removeFromWatchlistWrapper = useCallback(
    (movieId: string) => {
      setWatchlist(watchlist.filter(id => id !== movieId));

      removeFromWatchlist(movieId);
    },
    [watchlist, setWatchlist],
  );

  useEffect(() => {
    loadSimilarMovies(page);
  }, [page]);

  useEffect(() => {
    console.log('inital loading>>>>>>>>>');
    (async () => {
      const movieInfo = await getMovieInfo(params.movieId);
      setMovieInfo(movieInfo);

      const movieImages = await getMovieImages(params.movieId);
      setMovieImages(movieImages);

      const similarMovies = await getSimiliarMovies(params.movieId, 1);
      setSimilarMovies(similarMovies);
    })();
  }, []);

  useEffect(() => {
    const isFavourite = favouriteMovies.some(
      movieId => movieId === movieInfo.id + '',
    );

    const inWatchlist = watchlist.some(
      movieId => movieId === movieInfo.id + '',
    );

    setInWatchlist(inWatchlist);
    setIsFavourite(isFavourite);
  }, [favouriteMovies, watchlist, setInWatchlist, setIsFavourite, movieInfo]);

  return (
    <ScrollView style={styles.movieInfoContainer}>
      <View style={styles.backdropContainer}>
        <Image
          source={{ uri: movieInfo?.backdropUrl }}
          style={styles.backdropImage}
          blurRadius={3}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.favouriteBtn}
        onPress={() =>
          isFavourite
            ? removeFromFavouritesWrapper(movieInfo.id + '')
            : addToFavouritesWrapper(movieInfo.id + '')
        }>
        <MaterialCommunityIcons
          name={isFavourite ? 'heart' : 'heart-outline'}
          color={colors.primary}
          size={30}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.watchlistBtn}
        onPress={() =>
          inWatchlist
            ? removeFromWatchlistWrapper(movieInfo.id + '')
            : addToWatchlistWrapper(movieInfo.id + '')
        }>
        <MaterialCommunityIcons
          name={inWatchlist ? 'bookmark' : 'bookmark-outline'}
          color={colors.primary}
          size={30}
        />
      </TouchableOpacity>

      <View style={styles.movieInfoSubContainer}>
        <View style={styles.posterContaienr}>
          <Image
            source={{ uri: movieInfo?.posterUrl }}
            style={styles.posterImage}
          />
        </View>

        <View>
          <Text style={styles.movieName}>{movieInfo?.title}</Text>
          <TextWithIcon
            icon={{ name: 'calendar', size: 14 }}
            text={movieInfo?.releaseDate}
            textStyle={styles.movieReleaseDate}
          />
        </View>

        <Text style={styles.plot}>{movieInfo.plot}</Text>

        <View style={styles.movieStats}>
          <View style={styles.movieStatContainer}>
            <Text style={styles.movieStatText}>
              {movieInfo?.rating?.toPrecision(2)}
            </Text>
            <Text style={styles.movieStatHeading}>Rating</Text>
          </View>

          <View style={styles.movieStatContainer}>
            <Text style={styles.movieStatText}>{movieInfo?.ratingCount}</Text>
            <Text style={styles.movieStatHeading}>Rate Count</Text>
          </View>

          <View style={styles.movieStatContainer}>
            <Text style={styles.movieStatText}>
              {(movieInfo?.runtime / 60).toPrecision(2) + 'h'}
            </Text>
            <Text style={styles.movieStatHeading}>Runtime</Text>
          </View>
        </View>

        <View>
          <Text style={styles.insightsHeading}>Insights</Text>
          <ScrollView contentContainerStyle={styles.imagesContainer} horizontal>
            {movieImages.map(imageUrl => {
              return (
                <Image
                  key={uuid.v4().toString()}
                  source={{ uri: imageUrl }}
                  style={styles.movieExtraImage}
                />
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.similarMoviesContainer}>
          <Text style={styles.similarMoviesHeading}>Similar Movies</Text>
          <FlatList
            data={similarMovies}
            keyExtractor={(item, index) => item.id + '' + index}
            renderItem={({ item }) => (
              <MovieCard
                movie={item}
                onPress={() =>
                  navigation.push(ROUTES.MoviesStack.MovieInfo, {
                    movieId: item.id + '',
                  })
                }
              />
            )}
            indicatorStyle="black"
            initialNumToRender={8}
            horizontal={true}
            contentContainerStyle={styles.similarListContentStyle}
            onEndReached={() => setPage(page => page + 1)}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default memo(MovieInfo);
