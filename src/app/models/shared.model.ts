export interface Articles {
  id?: number;
  imges: string;
  description: string;
  author: string;
  creatAt: string;
}

export interface Websites {
  id: number;
  image: string;
  title: string;
  description: string;
  websiteLink: string;
}

export interface User {
  id: number;
  profile_img: string;
  name: string;
}
export interface Participants {
  id: number;
  profile_img: string;
  name: string;
  entries: string;
}

export interface AddCard {
  id: number;
}
export interface RiverTransferRankings {
  id: number;
  member: string;
  won: string;
  profit: string;
  points: string;
}
export interface Tournaments {
  id: number;
}

export interface PokerChipsSet {
  id: number;
  image: string;
  description: string;
  price: number;
  isVisible: boolean,
}

export interface PokerChipsSetWithDiscount {
  id: number;
  image: string;
  description: string;
  price: number;
  isVisible: boolean,
  discount: boolean,
  outOfStock:boolean
}