import { useCallback, useContext, useEffect, useState } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import MovieCardLong from '@components/movieCardLong';

import { ThemeAndStorageContext } from '@contexts/ThemeAndStorageContext';
import { getFavoriteMovies } from '@network/apiFunctions';

import styles from './styles';

function Favourites() {
  const [movies, setMovies] = useState<FormattedMovieData[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  const { favouriteMovies } = useContext(ThemeAndStorageContext);

  const navigation = useNavigation();

  // api handles
  const loadMovies = useCallback(
    async function loadMovies(page: number) {
      setLoading(true);
      const { formattedData, hasMoreData } = await getFavoriteMovies(page);
      setMovies([...movies, ...formattedData]);
      setHasMoreData(hasMoreData);
      setLoading(false);
    },
    [movies, setMovies, setLoading],
  );

  // on handlers
  const _renderItem = useCallback(
    ({ item }) => <MovieCardLong movie={item} />,
    [],
  );

  const _onListEndReached = useCallback(() => {
    if (hasMoreData) {
      setPage(page => page + 1);
    }
  }, [hasMoreData]);

  // effects
  useEffect(() => {
    loadMovies(page);
  }, [page]);

  useEffect(() => {
    /* loads new favourite movies from the api
     * when local favourite movies array changes in the context */
    loadMovies(1);
  }, [favouriteMovies]);

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({ headerTitle: 'Favourite Movies' });
    }, []),
  );

  return (
    <View style={styles.movieListContainer}>
      <FlatList
        keyExtractor={(item, index) => item.id + '' + index}
        data={movies}
        renderItem={_renderItem}
        ListFooterComponent={<ActivityIndicator animating={loading} />}
        style={styles.movieList}
        contentContainerStyle={styles.movieListContent}
        ListHeaderComponent={
          <Text style={styles.listHeader}>Favorite Movies</Text>
        }
        ListEmptyComponent={<Text style={styles.listHeader}>No favorites</Text>}
        onEndReached={_onListEndReached}
      />
    </View>
  );
}

export default Favourites;
