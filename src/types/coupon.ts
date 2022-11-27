export interface Coupon {
  id: number;
  name: string;
  price: number;
  desc: string;
  startDate: Date | null;
  endDate: Date | null;
  code?: string;
}

export interface ClientGainCoupon {
  code: string;
}

export interface CEOCoupon {
  itemList: Coupon[];
}

export interface CEOIssueCoupon {
  newName: string;
  newDesc: string;
  newPrice: number | null;
  newDate: Date;
}
