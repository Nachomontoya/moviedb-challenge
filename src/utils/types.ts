export type ChildrenProps = { children: React.ReactChild | React.ReactChild[] };

export type CardProps = {
  id?: number;
  imgUrl?: string;
  title?: string;
  votes?: string;
  isMovie?: boolean;
};

export type BtnProps = {
  txtBtn: string;
  onClick: any;
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
  image: string;
};
