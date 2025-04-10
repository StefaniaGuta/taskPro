import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { formattedDateForBtn } from '../../../services/formatingDate.js';
import { editCard } from '../../../redux/cards/cardsOpeartions';
import { closeModal } from '../../../redux/modal/modalSlice';
import CloseButton from '../CloseButton/CloseButton';
import ButtonModal from '../ButtonModal/ButtonModal.jsx';
import Calendar from '../Calendar/Calendar.jsx';
import '../Calendar/calendar.css';

import {
  CardSection,
  CardModal,
  Title,
  InputTitle,
  InputDescription,
  StyledPriority,
  StyledLabelDeadline,
  StyleErrorMessage,
  Span,
  LabelContainer,
  ButtonDate,
  CalendarContainer,
  LabelDiv,
  ChevronDown,
  BtnName,
} from '../AddCard/AddCard.styled.js';


const ModalEditCard = ({ cardId, updateCard }) => {
  const theme = useSelector(state => state.auth.user.theme);
  const boardId = useParams(); 
  const currentBoardName = useSelector((state) => state.boards.boards.current?.slug);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [select, setSelect] = useState();
  const [formattedDate, setFormattedDate] = useState('');


  const priorityValue = ['low', 'medium', 'high', 'without'];

  useEffect(() => {
    setFormattedDate(formattedDateForBtn(date));
  }, [date]);

  const initialValues = {
    title: cardId.title,
    description: cardId.description, 
    priority: cardId.priority,
    deadline: cardId.deadline,
  };

  const schema = yup.object({
    title: yup
      .string()
      .min(2, 'Too Short!')
      .max(30, 'Maximum 30 characters')
      .matches(
        /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)*$/,
        'Invalid name format'
      ),
    description: yup.string(),
    priority: yup
      .string()
      .oneOf(['low', 'medium', 'high', 'without']),
    deadline: yup.date(),
    column: yup.string(),
  });


  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const handleSubmit = async (values) => {
    try {
      const { title, description, priority, deadline } = values;
     const response = await dispatch(editCard({boardName: boardId.boardId || currentBoardName, id: cardId._id, title, description, priority, deadline}));
     if (updateCard) {
      updateCard(response.payload);
    }
     dispatch(closeModal());
      console.log('response modal', response)
      console.log('values', values)
      return response.payload;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitCalendar = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <CardSection>
      <CardModal theme={theme}>
      <CloseButton/>
        <Title theme={theme}>Edit card</Title>
        <Formik
          theme={theme}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
          autoComplete="off"
        >
          {({ setFieldValue, values }) => (
            <Form>
              <InputTitle
                theme={theme}
                id="title"
                name="title"
                type="text"
                placeholder="Title"
              />
              <StyleErrorMessage name="title" component="div" />
              <InputDescription
                theme={theme}
                as="textarea"
                id="description"
                name="description"
                type="text"
                value={values.description}
                onChange={(event) =>
                  setFieldValue('description', event.target.value)
                }
                placeholder="Description"
              />
              <StyleErrorMessage name="description" component="div" />
              <LabelDiv>
                <StyledPriority theme={theme} id="priority">Label color</StyledPriority>
                <LabelContainer role="group" aria-labelledby="my-radio-group">
                  {priorityValue.map((value) => {
                    return (
                      <label htmlFor={value} key={value}>
                        <input
                          theme={theme}
                          value={value}
                          type="radio"
                          id={value}
                          name="priority"
                          onChange={(event) => {
                            handleSelectChange(event);
                            setFieldValue('priority', event.target.value);
                          }}
                          checked={select === value}
                        />
                        <Span value={value} />
                      </label>
                    );
                  })}
                </LabelContainer>
                <StyleErrorMessage name="priority" component="div" />
              </LabelDiv>
              <StyledLabelDeadline theme={theme}> Deadline</StyledLabelDeadline>
              <CalendarContainer>
                <ButtonDate type="button">
                  <BtnName>
                    {formattedDate}
                    <ChevronDown />
                  </BtnName>
                </ButtonDate>
                <Calendar
                  prop={date}
                  click={handleSubmitCalendar}
                  setFieldValue={setFieldValue}
                />
                <StyleErrorMessage name="deadline" component="div" />
              </CalendarContainer>
              <ButtonModal theme={theme} buttonName={'Edit'} />
            </Form>
          )}
        </Formik>
      </CardModal>
    </CardSection>
  );
};

export default ModalEditCard;
