import { memo } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import styles from './style';

function MovieCard({
  movie,
  onPress,
  containerStyle,
  headingStyle,
  imageStyle,
}: MovieCardProps) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Image
        source={{ uri: movie.posterUrl }}
        style={[styles.imageStyle, imageStyle]}
        resizeMode="cover"
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[styles.headingStyle, headingStyle]}>
        {movie.title}
      </Text>
    </TouchableOpacity>
  );
}

export default memo(MovieCard);
