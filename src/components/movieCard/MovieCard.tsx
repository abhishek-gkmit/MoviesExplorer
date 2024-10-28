import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import styles from '@components/movieCard/style';
import { memo } from 'react';

function MovieCard({
  movie,
  onPress,
  containerStyle,
  headingStyle,
  imageStyle,
}: MovieCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>
      <Image
        source={{ uri: movie.posterUrl }}
        style={styles.imageStyle}
        resizeMode="cover"
      />
        <Text numberOfLines={1} ellipsizeMode='tail' style={StyleSheet.compose(styles.headingStyle, headingStyle)}>
          {movie.title}
        </Text>
    </TouchableOpacity>
  );
}

export default memo(MovieCard);
