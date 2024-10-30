import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState, memo } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Input from '@components/input';
import MovieCardLong from '@components/movieCardLong';
import { getPopularMovies, searchMovies } from '@network/apiFunctions';
import colors from '@constants/colors';

import styles from '@screens/moviesList/styles';

function MoviesList() {
  const [movies, setMovies] = useState<FormattedMovieData[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [searchedMovies, setSearchedMovies] = useState<FormattedMovieData[]>(
    [],
  );
  const [searchPage, setSearchPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  const navigation = useNavigation();

  const loadMovies = useCallback(
    async function loadMovies(page: number) {
      setLoading(true);
      const formattedMovies = await getPopularMovies(page);
      setMovies([...movies, ...formattedMovies]);
      setLoading(false);
    },
    [movies, setMovies, setLoading],
  );

  const getSearchedMovies = useCallback(
    async function (page: number, shouldAppend: boolean = false) {
      setLoading(true);
      const newSearchedMovies = await searchMovies(searchText, page);

      if (shouldAppend) {
        setSearchedMovies([...searchedMovies, ...newSearchedMovies]);
      } else {
        setSearchedMovies(newSearchedMovies);
      }

      setLoading(false);
    },
    [searchedMovies, setSearchedMovies, setLoading, searchText],
  );

  useEffect(() => {
    loadMovies(page);
  }, [page]);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => getSearchedMovies(1), 2000);

    return () => clearTimeout(timeoutId);
  }, [searchText]);

  useEffect(() => {
    getSearchedMovies(searchPage, true);
  }, [searchPage]);

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.getParent()?.setOptions({ headerTitle: 'Movies' });
    }, []),
  );

  return (
    <View style={styles.movieListContainer}>
      <Input
        value={searchText}
        setValue={value => setSearchText(value)}
        placeholder="Search for movies"
        icon={<MaterialIcons name="search" color={colors.gray} size={18} />}
      />

      <FlatList
        keyExtractor={(item, index) => item.id + '' + index}
        data={searchText === '' ? movies : searchedMovies}
        renderItem={({ item }) => <MovieCardLong movie={item} />}
        ListFooterComponent={<ActivityIndicator animating={loading} />}
        contentContainerStyle={styles.movieListContent}
        onEndReached={
          searchText === ''
            ? () => setPage(page => page + 1)
            : () => setSearchPage(searchPage => searchPage + 1)
        }
        ListHeaderComponent={
          <Text style={styles.listHeader}>
            {searchText === '' ? 'Popular Movies' : 'Search Results'}
          </Text>
        }
      />
    </View>
  );
}

export default memo(MoviesList);
