import styled from 'styled-components';

import { FontSize } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const DatePickerWrapper = styled.div`
  .react-datepicker {
    font-size: 1em;
  }
  .react-datepicker__header {
    padding-top: 0.8em;
  }
  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 1.9em;
    line-height: 1.9em;
    margin: 0.166em;
  }
  .react-datepicker__current-month {
    font-size: 1em;
  }

  .react-datepicker {
    font-size: ${FontSize.XL};
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid ${ColorCode.WHITE};
    border-radius: 10px;

    .react-datepicker__header {
      border: none;
      background: rgba(255, 255, 255);
    }

    .react-datepicker__current-month,
    .react-datepicker-time__header,
    .react-datepicker-year-header {
      font-size: ${FontSize.XL};
      line-height: 2rem;
    }

    .react-datepicker__navigation {
      width: 1.5rem;
      height: 1.5rem;

      top: 1rem;
    }

    .react-datepicker__day--selected {
      background-color: ${ColorCode.PRIMARY};
    }

    .react-datepicker__day--outside-month {
      color: ${ColorCode.GREY};
    }

    .react-datepicker__time-container .react-datepicker__time {
      background: rgba(255, 255, 255, 0.9);
      border-radius: 10px;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list {
      li {
        vertical-align: middle;
        line-height: 2rem;
        height: 2rem;
      }

      li.react-datepicker__time-list-item--selected {
        background-color: ${ColorCode.PRIMARY};
      }
    }
    .react-datepicker__triangle {
      display: none;
    }
  }
`;
