import React from "react";
import store from "../redux/store";

export type ChildrenProps = { children: React.ReactChild | React.ReactChild[] };

export type CardProps = {
  id?: number;
  imgUrl?: string;
  title?: string;
  votes?: string;
  isMovie?: boolean;
};

export type InfoProps = {
  isDark: boolean;
  endpoint: string;
};

export type RelatedProps = {
  endpoint: string;
};

export type RatingProps = {
  isDark: boolean;
  votes?: number;
};

export type ContentImgProps = {
  image?: string;
  title: string;
};

export type BtnProps = {
  children: string | React.ReactChild;
  onClick: () => unknown;
  isActive: boolean;
};

export type ResultProps = {
  id: number;
  poster_path: string;
  overview?: string;
  title?: string;
  name?: string;
  vote_average?: number;
}[];

export type DetailsProps = {
  title: string;
  votes: number;
  overview: string;
  image?: string;
};

export type ReduxState = {
  isDark: boolean;
};

export type ImgObject = {
  id: number;
  poster_path: string;
  name?: string;
  title?: string;
  vote_average: number;
};

export type RootState = ReturnType<typeof store.getState>;
