import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {sendHelp} from '../../../redux/NeedHelp/operations';

import {
  NeedHelpContainer,
  Title,
  Button,
 
  StyleErrorMessage,
  Error,
  InputComment,
  InputEmail,
  NeedHelpSection
} from './NeedHelp.styled';
import CloseButton from '../CloseButton/CloseButton';
import { closeModal } from '../../../redux/modal/modalSlice.js';
import { useDispatch, useSelector } from 'react-redux';


const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    }),
  comment: yup.string().required('Comment is required'),
});

const NeedHelpModal = () => {
  const theme = useSelector(state => state.auth.user.theme);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { comment } = values;
      await dispatch(sendHelp(comment));
      Notify.success('Comment sent');
      resetForm();
      dispatch(closeModal());
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

 
  return (
    <NeedHelpSection>
      <NeedHelpContainer theme={theme}>
        <CloseButton/>
        <Title theme={theme}>Need help</Title>
        <Formik
          initialValues={{ email: '', comment: '' }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
           
              <InputEmail type="email" name="email" placeholder="Email" theme={theme}/>
              <StyleErrorMessage name="email">
                {(msg) => <Error>{msg}</Error>}
              </StyleErrorMessage>
            
              <InputComment
              theme={theme}
                name="comment"
                placeholder="Comment"
                component="textarea"
              />

              <StyleErrorMessage name="comment">
                {(msg) => <Error>{msg}</Error>}
              </StyleErrorMessage>
            

            <Button type="submit" theme={theme}>
              Send
            </Button>
          </Form>
        </Formik>
      </NeedHelpContainer>
    </NeedHelpSection>
  );
};

export default NeedHelpModal;
