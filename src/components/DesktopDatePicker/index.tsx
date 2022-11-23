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

const DesktopDatePicker = ({ date, setDate, customInput }: DatePickerValue) => {
  const today = new Date();

  return (
    <DatePickerWrapper>
      <ReactDatePicker
        selected={date}
        onChange={(data) => setDate(data!)}
        locale={ko}
        dateFormat='yyyy.MM.dd '
        dateFormatCalendar='yyyy년 MM월'
        minDate={today}
        customInput={customInput}
        disabledKeyboardNavigation
      />
    </DatePickerWrapper>
  );
};

export default DesktopDatePicker;
