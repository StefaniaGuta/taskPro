import { Formik } from 'formik';
import * as yup from 'yup';
import CloseButton from '../CloseButton/CloseButton';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import { editColumn } from '../../../redux/columns/columnsOperations'; 
import { useParams } from 'react-router-dom';
import ButtonModal from '../ButtonModal/ButtonModal';
import {
  Form,
  FormFieldTitle,
  FieldTitle,
  ErrorMessage,
  ModalContainer,
  Title,
  EditColumnSection
} from './ModalEditColumn.styled';

const ModalEditColumn = ({columnId, updateColumn}) => {
  const theme = useSelector(state => state.auth.user.theme);
  const dispatch = useDispatch();
  const boardId = useParams(); 
  const currentBoard = useSelector((state) => state.boards.boards.current?.slug);
  const currentColumnName = useSelector((state) =>
    state.boards.boards.current?.columns.find((col) => col._id === columnId)?.name
  );
  
  
  const handleSubmit = async (values) => {
    try {
      const { name } = values;
      const response = await dispatch(editColumn({ boardName: boardId.boardId || currentBoard, id: columnId, name: name }));  
      if(updateColumn){
        updateColumn(columnId, name);
      }
      console.log(response)
      dispatch(closeModal());
      return response.payload;
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <EditColumnSection>
      <ModalContainer theme={theme}>
        <CloseButton />
        <Title theme={theme}>Edit column</Title>
        <Formik
          initialValues={{
            name: currentColumnName,
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
                title="You need to enter the name of the column"
                required
                placeholder="Title"
              />
              <ErrorMessage name="name" component="p" />
            </FormFieldTitle>

            <ButtonModal theme={theme} buttonName={'Edit'} />
          </Form>
        </Formik>
      </ModalContainer>
    </ EditColumnSection>
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
    .required('Required!'),
});

export default ModalEditColumn;