import { useSelector } from 'react-redux';
import React from 'react';
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
    const theme = useSelector(state => state.auth.user.theme);

    return (
      <ReactDatePicker
      theme={theme}
        ref={ref}
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