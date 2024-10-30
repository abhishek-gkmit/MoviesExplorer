import {NavigationProp} from '@react-navigation/native';
import ROUTES from '@constants/routes';
import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  type DrawerScreenNames = keyof typeof ROUTES.Drawer;
  type DrawerParamList = Record<DrawerScreenNames, undefined>;

  type BottomTabsScreenNames = keyof typeof ROUTES.BottomTabs;
  type BottomTabsParamList = Record<BottomTabsScreenNames, undefined>;

  type MoviesStackParamList = {
    MoviesList: undefined;
    MovieInfo: {
      movieId: string;
    };
  };
  type MoviesListScreenProps = NativeStackScreenProps<
    MoviesStackParamList,
    typeof ROUTES.MoviesStack.MoviesList
  >;
  type MoviesInfoScreenProps = NativeStackScreenProps<
    MoviesStackParamList,
    typeof ROUTES.MoviesStack.MovieInfo
  >;
}
