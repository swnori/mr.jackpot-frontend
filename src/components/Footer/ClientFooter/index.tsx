import React from 'react';

import ClientMainFooter from './ClientMainFooter';

interface FooterValue {
  path: string;
}

const footerMap: { [key: string]: JSX.Element | null } =
  {
    '/client/main': <ClientMainFooter />,
    '/client/orderlist': <ClientMainFooter />,
  } ?? null;

const ClientFooter = ({ path }: FooterValue) => {
  return footerMap[path];
};

export default ClientFooter;
