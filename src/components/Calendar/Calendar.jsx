import React from 'react';
import i18next from 'i18next';
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';
import { ro } from 'date-fns/locale/ro';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const Calendar = React.forwardRef(
  ({ selectedDate, setDate, toggleCalendar }, ref) => {
    const minDate = new Date();
    setDefaultLocale('en');
    registerLocale('ro', ro);

    return (
      <ReactDatePicker
        ref={ref}
        locale={
          i18next.language === 'ro' || i18next.language === 'ro-UA'
            ? 'ro'
            : 'en'
        }
        selected={selectedDate}
        onChange={date => setDate(date)}
        minDate={minDate}
        calendarStartDay={1}
        dateFormat="EEEE, d"
        onCalendarOpen={() => toggleCalendar(true)}
        onCalendarClose={() => toggleCalendar(false)}
      />
    );
  }
);

export default Calendar;