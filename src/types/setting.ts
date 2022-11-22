import { Employee, Member } from './user';

export interface Setting {
  itemList: Partial<Employee & Member>[];
  newName: string;
  newType: '요리' | '배달';
  newPart: boolean[];
  updateUserId: number;
}
