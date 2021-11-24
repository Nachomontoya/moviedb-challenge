const { REACT_APP_TMDB_API_ROUTE, REACT_APP_TMDB_API_TOKEN } = process.env;

export const PUBLIC = {
  HOME: "/",
};

export const API = {
  MAIN: REACT_APP_TMDB_API_ROUTE,
  MOVIES: "/movie",
  TV: "/tv",
  POPULAR: "/popular",
  API_TOKEN: REACT_APP_TMDB_API_TOKEN,
  IMAGES_URL: "https://image.tmdb.org/t/p/original",
};
