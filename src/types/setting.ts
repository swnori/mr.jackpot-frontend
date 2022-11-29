import { Employee, Member } from './user';

export const EmployeeTypeDic = {
  요리: 1,
  스타일: 2,
  배달: 3,
} as const;

export const EmployeeTypeArr = {
  1: '요리',
  2: '스타일',
  3: '배달',
} as const;

export interface Setting {
  itemList: Partial<Employee & Member>[];
  newName: string;
  newType: number;
  updateUserId: number;
}
