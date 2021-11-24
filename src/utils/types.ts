export type ChildrenProps = { children: React.ReactChild | React.ReactChild[] };

export type CardProps = { imgUrl?: string; title?: string; votes?: number };

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
  vote_average?: number;
}[];
