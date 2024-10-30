import { TouchableOpacity, Text, View, Image } from 'react-native';
import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import TextWithIcon from '@components/textWithIcon';

import { trimText } from '@utility/dataFormatters';
import ROUTES from '@constants/routes';
import globalStyles from '@theme/globalStyles';
import colors from '@constants/colors';
import styles from '@components/movieCardLong/styles';

function MovieCardLong({ movie }: MovieProps) {
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
            icon={{ name: 'star', size: 18, color: colors.yellow }}
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

export default memo(MovieCardLong);
