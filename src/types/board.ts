interface ResponseDinner {
  Id: number;
  Name: string;
  Price: number;
  MenuList: { MenuId: number; Count: number }[];
}

interface ResponseOption {
  Name: string;
  OptionList: { Id: number; Name: string; Price: number }[];
}

interface ResponseMenu {
  Id: number;
  Name: string;
  Price: number;
  MenuType: string;
  OptionModelList: ResponseOption[];
}

interface ResponseStyle {
  Id: number;
  Name: string;
  Price: number;
  Desc: string;
}

export interface ResponseBoard {
  dinnerList: ResponseDinner[];
  menuList: ResponseMenu[];
  styleList: ResponseStyle[];
}
