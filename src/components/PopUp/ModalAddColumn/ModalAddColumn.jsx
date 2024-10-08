import { Formik } from 'formik';
import * as yup from 'yup';
import { useCreateColumnMutation } from '../../../redux/boardApi/boardApi';
import { useDispatch} from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import urlIcon from '../../../images/icons/sprite.svg';
import CloseButton from '../CloseButton/CloseButton';
import Loader from '../../Loader/Loader';
import { useParams } from 'react-router-dom';
//import {addColumn } from '../../../redux/columns/columnsOperations';
import { useState } from 'react';

import {
  Form,
  FormFieldTitle,
  FieldTitle,
  ErrorMessage,
  ModalContainer,
  Title,
  Button,
  ContainerIconButton,
} from './ModalAddColumn.styled';


const ModalAddColumn = () => {
  const dispatch = useDispatch();
  const boardId = useParams(); 
  const [createColumn, { isLoading: isCreateLoading }] = useCreateColumnMutation();
  const [isColumnCreated, setIsColumnCreated] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const { name } = values;
      if (!name) {
        throw new Error('"name" is required');
      }
      const response = await createColumn({boardName: boardId.boardId, name});

      dispatch(closeModal());
      setIsColumnCreated(name);
      console.log('created')
      console.log(response);
      return response.data;

    } catch (error) {
      console.log('erroare in timpul crearii coloanei', error);
    }
  };

  return (
    <>
      <ModalContainer>
        <CloseButton />
        <Title>Add column</Title>
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
                type="text"
                name="name"
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="You need to enter the name of the column"
                required
                placeholder="Title"
              />
              <ErrorMessage name="name" component="p" />
            </FormFieldTitle>

            <Button type="submit" disabled={isCreateLoading}>
              <ContainerIconButton>
                <svg width="14" height="14">
                  <use xlinkHref={`${urlIcon}#icon-plus`} />
                </svg>
              </ContainerIconButton>
              {isCreateLoading ? <Loader /> : 'Add'}
            </Button>
          </Form>
        </Formik>

        {isColumnCreated && (
          <>
          <h2> name: {isColumnCreated.name}</h2>
          <Button>
            <ContainerIconButton>
              <svg width="14" height="14">
                <use xlinkHref={`${urlIcon}#icon-plus`} />
              </svg>
            </ContainerIconButton>
            Add Cards
          </Button>
          </>
        )}
      </ModalContainer>
    </>
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