export interface User {
  token: string;
}

export interface Client extends User {
  name: string;
  contact: string;
  address: string;
}

export type CookPart = '그릴' | '팬' | '오븐' | '콜드' | '스타일';

export interface Employee {
  id: number;
  code: string;
  name: string;
  type: '요리' | '배달';
  part: CookPart[] | null;
  join: Date;
  score: number;
}

export interface Member {
  id: number;
  name: string;
  contact: string;
  address: string;
  join: Date;
  order: number;
  pay: number;
  rating: number;
  orderList?: {
    id: number;
    dinnerName: string;
    time: Date;
    price: number;
    stateId: number;
  }[];
}
