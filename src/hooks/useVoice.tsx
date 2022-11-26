import { useRecoilState } from 'recoil';
import { useState } from 'react';

import useOrder from './useOrder';
import useMenu from './useMenu';

import { dinnerOrderState } from '@/stores/order';

import { MenuType } from '@/types/menu';

const synth = window.speechSynthesis;

let voices: any[] = [];

interface Pointer {
  main: number;
  side: number;
  drink: number;
  opt: number;
}

const useVoice = () => {
  const [dinnerOrder, setDinnerOrder] = useRecoilState(dinnerOrderState);
  const { getMenuById, getMenuByOptId } = useMenu();
  const { setDinnerDefault, addDinnerToCart } = useOrder();
  const [ptr, setPtr] = useState<Pointer>({ main: 0, side: 0, drink: 0, opt: 0 });

  const voiceOrder = (entityType: string, entityId: number) => {
    if (entityType === 'end') {
      if (dinnerOrder.mainDish.length > 0) {
        addDinnerToCart();
      }
    }
    if (entityType === 'dinner') {
      if (dinnerOrder.mainDish.length > 0) {
        addDinnerToCart();
      }
      setDinnerDefault(entityId);
      setPtr({ main: 0, side: 0, drink: 0, opt: 0 });
    }
    if (entityType === 'option') {
      const menu = getMenuByOptId(entityId)!;
      if (menu.type === MenuType.MAIN_DISH) {
        setDinnerOrder((prev) => {
          const nextDinner = { ...prev };
          const nextMain = [...nextDinner.mainDish];
          const nextDish = { ...nextMain[ptr.main] };
          const nextOption = [...nextDish.option] as [number | null, number | null];

          nextOption[ptr.opt] = entityId;

          nextDish.option = nextOption;
          nextMain[ptr.main] = nextDish;
          nextDinner.mainDish = nextMain;

          const nextPtr = { ...ptr };
          if (ptr.opt === 0 && menu.option[1]) {
            nextPtr.opt = 1;
          }

          if (ptr.opt === 0 && !menu.option[1]) {
            nextPtr.main += 1;
          }

          if (ptr.opt === 1) {
            nextPtr.opt = 0;
            nextPtr.main += 1;
          }

          setPtr(nextPtr);
          return nextDinner;
        });
      }

      if (menu.type === MenuType.SIDE) {
        setDinnerOrder((prev) => {
          const nextDinner = { ...prev };
          const nextSide = [...nextDinner.side];
          const nextDish = { ...nextSide[ptr.side] };
          const nextOption = [...nextDish.option] as [number | null, number | null];

          nextOption[ptr.opt] = entityId;

          nextDish.option = nextOption;
          nextSide[ptr.side] = nextDish;
          nextDinner.side = nextSide;

          const nextPtr = { ...ptr };
          if (ptr.opt === 0 && menu.option[1]) {
            nextPtr.opt = 1;
          }

          if (ptr.opt === 0 && !menu.option[1]) {
            nextPtr.side += 1;
          }

          if (ptr.opt === 1) {
            nextPtr.opt = 0;
            nextPtr.side += 1;
          }
          setPtr(nextPtr);
          return nextDinner;
        });
      }

      if (menu.type === MenuType.DRINK) {
        setDinnerOrder((prev) => {
          const nextDinner = { ...prev };
          const nextDrink = [...nextDinner.drink];
          const nextDish = { ...nextDrink[ptr.drink] };
          const nextOption = [...nextDish.option] as [number | null, number | null];

          nextOption[ptr.opt] = entityId;

          nextDish.option = nextOption;
          nextDrink[ptr.drink] = nextDish;
          nextDinner.drink = nextDrink;

          const nextPtr = { ...ptr };
          if (ptr.opt === 0 && menu.option[1]) {
            nextPtr.opt = 1;
          }

          if (ptr.opt === 0 && !menu.option[1]) {
            nextPtr.drink += 1;
          }

          if (ptr.opt === 1) {
            nextPtr.opt = 0;
            nextPtr.drink += 1;
          }
          setPtr(nextPtr);
          return nextDinner;
        });
      }
    }
    if (entityType === 'style') {
      setDinnerOrder((prev) => ({ ...prev, style: entityId }));
    }

    if (entityType === 'menu') {
      const menu = getMenuById(entityId)!;
      if (menu.type === MenuType.MAIN_DISH) {
        setDinnerOrder((prev) => {
          const nextDinner = { ...prev };
          const nextMain = [...nextDinner.mainDish];
          nextMain.push({
            menuId: menu.id,
            option: [menu.option[0]?.default ?? null, menu.option[1]?.default ?? null] as [
              number | null,
              number | null,
            ],
            isDefault: false,
            count: 0,
          });
          nextDinner.mainDish = nextMain;
          return nextDinner;
        });
      }
      if (menu.type === MenuType.SIDE) {
        setDinnerOrder((prev) => {
          const nextDinner = { ...prev };
          const nextSide = [...nextDinner.side];
          nextSide.push({
            menuId: menu.id,
            option: [menu.option[0]?.default ?? null, menu.option[1]?.default ?? null] as [
              number | null,
              number | null,
            ],
            isDefault: false,
            count: 0,
          });
          nextDinner.side = nextSide;
          return nextDinner;
        });
      }
      if (menu.type === MenuType.DRINK) {
        setDinnerOrder((prev) => {
          const nextDinner = { ...prev };
          const nextDrink = [...nextDinner.drink];
          nextDrink.push({
            menuId: menu.id,
            option: [menu.option[0]?.default ?? null, menu.option[1]?.default ?? null] as [
              number | null,
              number | null,
            ],
            isDefault: false,
            count: -1,
          });
          nextDinner.drink = nextDrink;
          return nextDinner;
        });
      }
    }

    if (entityType === 'count') {
      setDinnerOrder((prev) => {
        const nextDinner = { ...prev };
        const [mainDishSize, sideSize, drinkSize] = [
          nextDinner.mainDish.length,
          nextDinner.side.length,
          nextDinner.drink.length,
        ];

        if (mainDishSize !== 0 && nextDinner.mainDish[mainDishSize - 1].count === -1) {
          nextDinner.mainDish[mainDishSize - 1].count = entityId;
        }

        if (sideSize !== 0 && nextDinner.side[sideSize - 1].count === -1) {
          nextDinner.side[sideSize - 1].count = entityId;
        }

        if (drinkSize !== 0 && nextDinner.drink[drinkSize - 1].count === -1) {
          nextDinner.drink[drinkSize - 1].count = entityId;
        }

        return nextDinner;
      });
    }
  };
  const populateVoiceList = () => {
    voices = synth.getVoices().sort((a, b) => {
      const aname = a.name.toUpperCase();
      const bname = b.name.toUpperCase();

      if (aname < bname) {
        return -1;
      }
      if (aname === bname) {
        return 0;
      }
      return +1;
    });

    for (let i = 0; i < voices.length; i += 1) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
    }
  };

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const startSpeak = (inputTxt: string) => {
    if (synth.speaking) {
      return;
    }

    if (inputTxt !== '') {
      return new Promise((resolve, reject) => {
        const utterThis = new SpeechSynthesisUtterance(inputTxt);
        const selectedOption = 'Google 한국의';

        for (let i = 0; i < voices.length; i += 1) {
          if (voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
            break;
          }
        }
        utterThis.pitch = 0.7;
        utterThis.rate = 1.5;
        utterThis.onend = (e) => {
          resolve(e);
        };

        utterThis.onerror = (e) => {
          reject(e);
        };

        synth.speak(utterThis);
      });
    }
  };

  const stopSpeak = () => {
    synth.cancel();
  };

  return {
    startSpeak,
    stopSpeak,
    voiceOrder,
  };
};

export default useVoice;
