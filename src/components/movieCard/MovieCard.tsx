import { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import styles from '@components/movieCard/style';

function MovieCard({
  movie,
  onPress,
  containerStyle,
  headingStyle,
  imageStyle,
}: MovieCardProps) {
  return (
    <TouchableOpacity
      style={StyleSheet.compose(styles.container, containerStyle)}
      onPress={onPress}>
      <Image
        source={{ uri: movie.posterUrl }}
        style={StyleSheet.compose(styles.imageStyle, imageStyle)}
        resizeMode="cover"
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={StyleSheet.compose(styles.headingStyle, headingStyle)}>
        {movie.title}
      </Text>
    </TouchableOpacity>
  );
}

export default memo(MovieCard);
