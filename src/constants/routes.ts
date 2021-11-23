const { REACT_APP_TMDB_API_ROUTE, REACT_APP_TMDB_API_KEY } = process.env;

export const PUBLIC = {
  HOME: "/",
};

export const API = {
  MAIN: REACT_APP_TMDB_API_ROUTE,
  MOVIES: "/movie",
  POPULAR: "/popular",
  API_KEY: REACT_APP_TMDB_API_KEY,
};
