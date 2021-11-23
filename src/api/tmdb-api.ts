import { API } from "../constants/routes";

const axios = require("axios").default;

export function getPopularMovies() {
  return axios.get(`${API.MAIN}${API.MOVIES}${API.POPULAR}`, {
    headers: { Authorization: `Bearer ${API.API_KEY}` },
  });
}
