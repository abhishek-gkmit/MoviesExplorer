import ROUTES from '@constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MoviesList from '@screens/moviesList';
import MovieInfo from '@screens/movieInfo';

const Stack = createNativeStackNavigator<MoviesStackParamList>();

function MoviesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.MoviesStack.MoviesList}
        component={MoviesList}
      />
      <Stack.Screen name={ROUTES.MoviesStack.MovieInfo} component={MovieInfo} />
    </Stack.Navigator>
  );
}

export default MoviesStack;
