export interface Coupon {
  id: number;
  name: string;
  price: number;
  desc: string;
  startDate: Date | null;
  endDate: Date | null;
  code?: string;
}

export interface CEOCoupon {
  itemList: Coupon[];
  newName: string;
  newDesc: string;
  newPrice: number | null;
  newDate: Date;
}
