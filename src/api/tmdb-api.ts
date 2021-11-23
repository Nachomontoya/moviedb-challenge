import { API } from "../constants/routes";

const axios = require("axios").default;

export function getPopularMovies(page = 1) {
  return axios.get(`${API.MAIN}${API.MOVIES}${API.POPULAR}?page=${page}`, {
    headers: { Authorization: `Bearer ${API.API_KEY}` },
  });
}
