export interface DinnerInfo {
  id: number;
  name: string;
  img?: string;
  desc: string;
  mainDish: number[];
  side: number[];
  drink: number[];
  style: number;
  price: number;
}
