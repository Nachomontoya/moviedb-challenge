import { API } from "../constants/routes";

import axios, { AxiosInstance, AxiosResponse } from "axios";

export function makeTheMovieDbApi(): AxiosInstance {
  return axios.create({
    baseURL: API.MAIN,
  });
}

export function getPopularMovies(
  page = 1,
  api = makeTheMovieDbApi(),
): Promise<AxiosResponse> {
  return api.get(`${API.MOVIES}${API.POPULAR}?page=${page}`, {
    headers: { Authorization: `Bearer ${API.API_TOKEN}` },
  });
}

export function getPopularShows(
  page = 1,
  api = makeTheMovieDbApi(),
): Promise<AxiosResponse> {
  return api.get(`${API.MOVIES}${API.POPULAR}?page=${page}`, {
    headers: { Authorization: `Bearer ${API.API_TOKEN}` },
  });
}
