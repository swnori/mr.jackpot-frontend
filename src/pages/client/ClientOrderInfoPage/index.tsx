/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useLayoutEffect, useState } from 'react';

import { OrderInfoBtn, OrderInfoContainer } from './style';

import OrderStateSection from '@/components/OrderInfo/OrderStateSection';
import OrderPaymentSection from '@/components/OrderInfo/OrderPaymentSection';
import OrderInfoSection from '@/components/OrderInfo/OrderInfoSection';
import OrderDinnerListSection from '@/components/OrderInfo/OrderDinnerListSection';
import Header from '@/components/Header';

import useMenu from '@/hooks/useMenu';

import { MenuOrder, DinnerOrder, Order } from '@/types/order';
import { MenuType } from '@/types/menu';

import { fetchGetMyOrderInfo } from '@/apis/client';

const dummyOrderInfo = {
  id: 0,
  state: 0,
  info: {
    reserveName: '',
    reserveDate: new Date('2022-11-15T20:00:00'),
    address: '',
    contact: '',
    requestDetail: '',
  },
  couponName: '',
  couponPrice: 0,
  price: 0,
  dinnerList: [],
};

interface OrderInfoValue extends Order {
  state: number;
  couponName: string;
  couponPrice: number;
}

const ClientOrderInfoPage = () => {
  const { id } = useParams();
  const { getMenuById } = useMenu();
  const [orderInfo, setOrderInfo] = useState<OrderInfoValue>(dummyOrderInfo);
  const orderInfoMutation = useMutation('orderInfo', fetchGetMyOrderInfo, {
    onSuccess: async (res) => {
      const data = await res.json();
      const dinnerList = data.order.dinnerList.map((dinner: any) => {
        const [mainDish, side, drink] = dinner.menuList.reduce(
          (pre: MenuOrder[][], cur: any) => {
            const menu = getMenuById(cur.menuId);
            if (!menu) return pre;

            const nextItem = { ...cur };
            nextItem.option = [nextItem.option[0] ?? null, nextItem.option[1] ?? null];

            if (menu.type === MenuType.MAIN_DISH) {
              pre[0].push(nextItem);
            }
            if (menu.type === MenuType.SIDE) {
              pre[1].push(nextItem);
            }
            if (menu.type === MenuType.DRINK) {
              pre[2].push(nextItem);
            }

            return pre;
          },
          [[], [], []],
        );

        return {
          type: dinner.dinnerId,
          mainDish,
          side,
          drink,
          style: dinner.styleId,
        };
      });

      const { couponName, couponPrice, stateId, price } = data.orderinfo;

      setOrderInfo({
        dinnerList,
        couponName,
        couponPrice,
        state: stateId,
        price,
        info: {
          reserveName: data.orderinfo.reserveName,
          reserveDate: new Date(data.orderinfo.reserveDate),
          address: data.orderinfo.address,
          contact: data.orderinfo.contact,
          requestDetail: '문 앞에 두고 가주세요',
        },
      });
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  useLayoutEffect(() => {
    orderInfoMutation.mutate({ id: Number(id) });
  }, []);

  return (
    <OrderInfoContainer>
      <Header type='back' title='주문 정보' />
      <OrderStateSection stateName='도착' reserveDate={orderInfo.info.reserveDate} />
      <OrderDinnerListSection dinnerList={orderInfo.dinnerList as DinnerOrder[]} />
      <OrderInfoSection orderInfo={orderInfo.info} />
      <OrderPaymentSection
        price={orderInfo.price}
        couponName={orderInfo.couponName}
        couponPrice={orderInfo.couponPrice}
      />
      <OrderInfoBtn>주문 취소하기</OrderInfoBtn>
    </OrderInfoContainer>
  );
};

export default ClientOrderInfoPage;
