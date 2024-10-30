import {
  useEffect,
  useState,
  useCallback,
  useContext,
  memo,
  useMemo,
} from 'react';
import { Text, View, Image, ScrollView, FlatList } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import uuid from 'react-native-uuid';

import TextWithIcon from '@components/textWithIcon';
import MovieCard from '@components/movieCard';
import IconButton from '@components/iconButton';
import Loader from '@components/customLoader';

import { ThemeAndStorageContext } from '@contexts/ThemeAndStorageContext';
import ROUTES from '@constants/routes';
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

import styles from './styles';

function MovieStats({ rating, ratingCount, runtime }: MovieStatsProps) {
  return (
    <View style={styles.movieStats}>
      <View style={styles.movieStatContainer}>
        <Text style={styles.movieStatText}>{rating?.toPrecision(2)}</Text>
        <Text style={styles.movieStatHeading}>Rating</Text>
      </View>

      <View style={styles.movieStatContainer}>
        <Text style={styles.movieStatText}>{ratingCount}</Text>
        <Text style={styles.movieStatHeading}>Rate Count</Text>
      </View>

      <View style={styles.movieStatContainer}>
        <Text style={styles.movieStatText}>
          {(runtime / 60).toPrecision(2) + 'h'}
        </Text>
        <Text style={styles.movieStatHeading}>Runtime</Text>
      </View>
    </View>
  );
}

function MovieImages({ images }: MovieImagesProps) {
  return (
    <View>
      <Text style={styles.insightsHeading}>Insights</Text>
      <ScrollView contentContainerStyle={styles.imagesContainer} horizontal>
        {images.map(imageUrl => {
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
  );
}

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

  // states
  const [movieInfo, setMovieInfo] = useState<FormattedMovieInfo>({} as any);
  const [movieImages, setMovieImages] = useState<string[]>([]);
  const [similarMovies, setSimilarMovies] = useState<FormattedMovieData[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // context states
  const { favouriteMovies, setFavouriteMovies, watchlist, setWatchlist } =
    useContext(ThemeAndStorageContext);

  // memoized values
  const isFavourite = useMemo(() => {
    const isFavourite = favouriteMovies.some(
      movieId => movieId === movieInfo.id + '',
    );

    return isFavourite;
  }, [favouriteMovies, movieInfo.id]);

  const inWatchlist = useMemo(() => {
    const inWatchlist = watchlist.some(
      movieId => movieId === movieInfo.id + '',
    );

    return inWatchlist;
  }, [watchlist, movieInfo.id]);

  // api handles
  const loadSimilarMovies = useCallback(
    async function loadSimilarMovies(page: number) {
      const newSimilarMovies = await getSimiliarMovies(movieInfo.id + '', page);
      setSimilarMovies([...similarMovies, ...newSimilarMovies]);
    },
    [similarMovies],
  );

  // onPress handlers
  const addToFavouritesWrapper = useCallback(
    (movieId: string) => {
      addToFavourites(movieId);
      setFavouriteMovies([...favouriteMovies, movieId]);
    },
    [favouriteMovies],
  );

  const removeFromFavouritesWrapper = useCallback(
    (movieId: string) => {
      setFavouriteMovies(favouriteMovies.filter(id => id !== movieId));

      removeFromFavourites(movieId);
    },
    [favouriteMovies],
  );

  const addToWatchlistWrapper = useCallback(
    (movieId: string) => {
      addToWatchlist(movieId);

      setWatchlist([...watchlist, movieId]);
    },
    [watchlist],
  );

  const removeFromWatchlistWrapper = useCallback(
    (movieId: string) => {
      setWatchlist(watchlist.filter(id => id !== movieId));

      removeFromWatchlist(movieId);
    },
    [watchlist],
  );

  const _onFavouriteBtnPress = useMemo(() => {
    return () =>
      isFavourite
        ? removeFromFavouritesWrapper(movieInfo.id + '')
        : addToFavouritesWrapper(movieInfo.id + '');
  }, [isFavourite, movieInfo.id]);

  const _onWatchlistBtnPress = useMemo(() => {
    return () =>
      inWatchlist
        ? removeFromWatchlistWrapper(movieInfo.id + '')
        : addToWatchlistWrapper(movieInfo.id + '');
  }, [inWatchlist, movieInfo.id]);

  const _listRenderItem = useCallback(
    ({ item }) => (
      <MovieCard
        movie={item}
        onPress={() =>
          navigation.push(ROUTES.MoviesStack.MovieInfo, {
            movieId: item.id + '',
          })
        }
      />
    ),
    [navigation],
  );

  // useEffects
  useEffect(() => {
    loadSimilarMovies(page);
  }, [page]);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const movieInfo = await getMovieInfo(params.movieId);
      setMovieInfo(movieInfo);

      const movieImages = await getMovieImages(params.movieId);
      setMovieImages(movieImages);

      const similarMovies = await getSimiliarMovies(params.movieId, 1);
      setSimilarMovies(similarMovies);

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.movieInfoContainer}>
      <View style={styles.backdropContainer}>
        <Image
          source={{ uri: movieInfo?.backdropUrl }}
          style={styles.backdropImage}
          blurRadius={3}
        />
      </View>

      <IconButton
        activeOpacity={0.5}
        btnStyle={styles.favouriteBtn}
        icon={{
          name: isFavourite ? 'heart' : 'heart-outline',
          color: colors.primary,
          size: 30,
        }}
        onPress={_onFavouriteBtnPress}
      />

      <IconButton
        activeOpacity={0.5}
        btnStyle={styles.watchlistBtn}
        icon={{
          name: inWatchlist ? 'bookmark' : 'bookmark-outline',
          color: colors.primary,
          size: 30,
        }}
        onPress={_onWatchlistBtnPress}
      />

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

        <MovieStats
          rating={movieInfo.rating}
          ratingCount={movieInfo?.ratingCount}
          runtime={movieInfo?.runtime}
        />

        <MovieImages images={movieImages} />

        <View style={styles.similarMoviesContainer}>
          <Text style={styles.similarMoviesHeading}>Similar Movies</Text>
          <FlatList
            data={similarMovies}
            keyExtractor={(item, index) => item.id + '' + index}
            renderItem={_listRenderItem}
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
