import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { getOneBoard } from '../../../redux/board/boardOperations';
import { filterCards } from '../../../redux/cards/cardsOpeartions';
import ModalWrapper from '../../Modals/ModalWrapper/ModalWrapper';
import {
  TitleContainer,
  Title,
  ClearFilterBox,
  ClearTitle,
  ClearButton,
  RadioButtonBox,
  RadioButton,
  PriorityFilterLabel,
  StyledMarker,
} from './Filters.styled';

const LABEL_ARR = [
    { id: 0, priority: 'low', color: 'blue' },
    { id: 1, priority: 'medium', color: 'pink' },
    { id: 2, priority: 'high', color: 'green' },
    { id: 3, priority: 'without priority', color: 'gray' },
  ];

const Filters = ({ boardId, onClose }) => {
  const [filterValue, setFilterValue] = useState('');
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const newLabelArr = [
    { ...LABEL_ARR.find(item => item.id === 3) },
    ...LABEL_ARR.filter(item => item.id !== 3),
  ];

  const handleFilterChange = newValue => {
    setFilterValue(newValue);
    dispatch(filterCards({ boardId: boardId, priority: newValue }));
    onClose();
  };

  const handleDefaultFilter = () => {
    dispatch(getOneBoard(boardId));
    onClose();
  };

  return (
    <ModalWrapper width={300} onClose={onClose}>
      <TitleContainer>
        <Title>{t('boards.filterButton')}</Title>
      </TitleContainer>
      <ClearFilterBox>
        <ClearTitle>{t('boards.filter.label')}</ClearTitle>
        <ClearButton type="button" onClick={handleDefaultFilter}>
          {t('boards.filter.all')}
        </ClearButton>
      </ClearFilterBox>
      <RadioButtonBox>
        {newLabelArr.map(({ id, priority, color }) => (
          <PriorityFilterLabel key={id} $color={color}>
            <RadioButton
              type="radio"
              name="priority"
              value={priority}
              checked={filterValue === priority}
              $color={color}
              onChange={() => handleFilterChange(priority)}
            />
            <StyledMarker $color={color}></StyledMarker>
            {t(`boards.filter.${priority}`)}
          </PriorityFilterLabel>
        ))}
      </RadioButtonBox>
    </ModalWrapper>
  );
};

export default Filters;