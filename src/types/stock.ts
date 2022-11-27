export interface StockItem {
  id: number;
  name: string;
  unit: string;
  count: number;
}

export interface Stock {
  itemList: StockItem[];
  newItemName: string;
  newUnitName: string;
  newAmount: number | null;
  updateMode: 'out' | 'in' | 'set';
}
