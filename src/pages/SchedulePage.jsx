import { MainContainer } from '../components/App/App.styled';
import ScheduleList from '../components/Schedule/ScheduleList/ScheduleList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCards } from '../redux/cards/cardsOpeartions';
import ScheduleHeader from '../components/Schedule/ScheduleHeader/ScheduleHeader';

const SchedulePage = () => {
  const dispatch = useDispatch();
  const [currentMonth, setCurrentMonth] = useState(true);

  const toggleCurrentMonth = () => {
    setCurrentMonth(prevState => !prevState);
  };

  useEffect(() => {
    dispatch(getAllCards());
  }, [dispatch]);

  return (
    <MainContainer>
      <ScheduleHeader
        toggleCurrentMonth={toggleCurrentMonth}
        currentMonth={currentMonth}
      />
      <ScheduleList currentMonth={currentMonth} />
    </MainContainer>
  );
};

export default SchedulePage;