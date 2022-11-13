export interface Coupon {
  id: number;
  name: string;
  price: number;
  desc: string;
  startDate: Date | null;
  endDate: Date | null;
}
