import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

function IconButton({ icon, btnStyle, ...props }: IconButtonComponentProps) {
  return (
    <TouchableOpacity
      style={[styles.iconButton, btnStyle]}
      activeOpacity={0.8}
      {...props}>
      <MaterialCommunityIcon {...icon} />
    </TouchableOpacity>
  );
}

export default IconButton;
