export interface Client {
  isMember: boolean;
  name: string;
  contact: string;
  address: string;
}

export interface Employee {
  id: number;
  code: string;
  name: string;
  type: number;
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
