import { API } from "../constants/routes";

import axios from "axios";

export function getPopularMovies(page = 1) {
  return axios.get(`${API.MAIN}${API.MOVIES}${API.POPULAR}?page=${page}`, {
    headers: { Authorization: `Bearer ${API.API_KEY}` },
  });
}
