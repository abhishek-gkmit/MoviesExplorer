const ROUTES = {
  Drawer: {
    Home: 'BottomTabs',
    Profile: 'Profile',
  },

  BottomTabs: {
    MoviesStack: 'MoviesStack',
    Favourites: 'Favourites',
  },

  MoviesStack: {
    MoviesList: 'MoviesList',
    MovieInfo: 'MovieInfo',
  },
} as const;

export default ROUTES;
