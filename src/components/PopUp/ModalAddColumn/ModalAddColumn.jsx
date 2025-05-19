import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import CloseButton from '../CloseButton/CloseButton';
import { useParams } from 'react-router-dom';
import {addColumn } from '../../../redux/columns/columnsOperations';
import ButtonModal from '../ButtonModal/ButtonModal';


import {
  Form,
  FormFieldTitle,
  FieldTitle,
  ErrorMessage,
  ModalContainer,
  Title,
  ColumnSection,
} from './ModalAddColumn.styled';


const ModalAddColumn = () => {
  const dispatch = useDispatch();
  const boardId = useParams(); 
  const currentBoard = useSelector((state) => state.boards.boards.current?.slug);
  const theme = useSelector(state => state.auth.user.theme);

  const handleSubmit = async (values) => {
    try {
      const { name } = values;
      if (!name) {
        throw new Error('"name" is required');
      }
     const response = await dispatch(addColumn({boardName: boardId.boardId || currentBoard, name}));
     dispatch(closeModal());
     return response.data;
    } catch (error) {
      console.log('erroare in timpul crearii coloanei', error);
    }
  };

  return (
    <ColumnSection>
      <ModalContainer theme={theme}>
        <CloseButton />
        <Title theme={theme}>Add column</Title>
        <Formik
          initialValues={{
            name: '',
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <FormFieldTitle>
              <FieldTitle
              theme={theme}
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="You need to enter the name of the column"
                required
                placeholder="Title"
              />
              <ErrorMessage name="name" component="p" />
            </FormFieldTitle>

            <ButtonModal theme={theme} buttonName={'Add'} />
          </Form>
        </Formik>
      </ModalContainer>
    </ColumnSection>
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(30, 'Maximum 30 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)*$/,
      'Invalid name format'
    )
    .required('Required!')
});

export default ModalAddColumn;