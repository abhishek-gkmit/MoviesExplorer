import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '@constants/colors';

import styles from './style';

function TextWithIcon({
  icon,
  text,
  containerStyle,
  textStyle,
}: TextWithIconProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialCommunityIcons
        name={icon.name}
        size={icon.size || 14}
        color={icon.color ? icon.color : colors.primary}
      />
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </View>
  );
}

export default TextWithIcon;
