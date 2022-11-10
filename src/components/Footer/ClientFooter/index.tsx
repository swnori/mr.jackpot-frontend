import React from 'react';

import ClientMainFooter from './ClientMainFooter';
import ClientDinnerFooter from './ClientDinnerFooter';
import ClientCartFooter from './ClientCartFooter';

interface FooterValue {
  pathName: string;
}

const footerMap: { [key: string]: JSX.Element | null } =
  {
    main: <ClientMainFooter />,
    orderlist: <ClientMainFooter />,
    dinner: <ClientDinnerFooter />,
    cart: <ClientCartFooter />,
  } ?? null;

/**
 * @param pathName url path 두번째 인자
 * @returns pathName에 따른 footer
 */
const ClientFooter = ({ pathName }: FooterValue) => {
  return footerMap[pathName];
};

export default ClientFooter;
