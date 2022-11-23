import ReactDatePicker from 'react-datepicker';
import React from 'react';
import { ko } from 'date-fns/esm/locale';

import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerWrapper } from './style';

interface DatePickerValue {
  date: Date;
  setDate: (date: Date) => void;
  customInput: React.ReactNode;
}

const MobileDatePicker = ({ date, setDate, customInput }: DatePickerValue) => {
  const today = new Date();

  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return (
      currentDate.getTime() < selectedDate.getTime() &&
      (selectedDate.getHours() > 15 ||
        (selectedDate.getHours() === 15 && selectedDate.getMinutes() >= 30)) &&
      selectedDate.getHours() < 22
    );
  };

  return (
    <DatePickerWrapper>
      <ReactDatePicker
        selected={date}
        onChange={(data) => setDate(data!)}
        locale={ko}
        showTimeSelect
        timeIntervals={15}
        dateFormat='yyyy.MM.dd (eee) aa hh시 mm분 '
        dateFormatCalendar='yyyy년 MM월'
        minDate={today}
        filterTime={filterPassedTime}
        customInput={customInput}
        disabledKeyboardNavigation
        popperPlacement='auto'
      />
    </DatePickerWrapper>
  );
};

export default MobileDatePicker;
