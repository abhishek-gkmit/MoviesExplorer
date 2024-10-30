import { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import uuid from 'react-native-uuid';

import colors from '@constants/colors';

import styles from './styles';

function BottomTab({ isFocused, title, icon, onPress }: BottomTabProps) {
  const iconToRender = useMemo(() => {
    return typeof icon === 'function'
      ? icon({ focused: isFocused, color: colors.primary, size: 18 })
      : icon;
  }, [icon, isFocused]);

  const titleToRender = useMemo(() => {
    return title === 'MoviesStack' ? 'Movies' : 'Favourites';
  }, [title]);

  return (
    <Pressable style={styles.tabContainer} onPress={onPress}>
      <View style={[styles.tab, isFocused ? styles.tabFocused : null]}>
        {iconToRender}
      </View>
      <Text
        style={[styles.tabTitle, isFocused ? styles.tabTitleFocused : null]}>
        {titleToRender}
      </Text>
    </Pressable>
  );
}

function BottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const tabs = state.routes.map((route, index) => {
    const { options } = descriptors[route.key];
    const label = options.tabBarLabel || options.title || route.name;
    const isFocused = state.index === index;
    const icon = options.tabBarIcon;

    return (
      <BottomTab
        key={uuid.v4().toString()}
        isFocused={isFocused}
        title={label as string}
        icon={icon}
        onPress={() => navigation.navigate(route.name)}
      />
    );
  });

  return <View style={styles.tabsContainer}>{tabs}</View>;
}

export default BottomTabBar;
