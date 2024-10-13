import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {sendHelp} from '../../../redux/NeedHelp/operations';

import {
  NeedHelpContainer,
  Title,
  Button,
  Wrapper,
  StyleErrorMessage,
  Error,
  InputComment,
  InputEmail,
} from './NeedHelp.styled';
import CloseButton from '../CloseButton/CloseButton';
import { closeModal } from '../../../redux/modal/modalSlice.js';
import { useDispatch } from 'react-redux';


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
    <>
      <NeedHelpContainer>
        <CloseButton />

        <Title>Need help</Title>
        <Formik
          initialValues={{ email: '', comment: '' }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Wrapper>
              <InputEmail type="email" name="email" placeholder="Email" />
              <StyleErrorMessage name="email">
                {(msg) => <Error>{msg}</Error>}
              </StyleErrorMessage>
            </Wrapper>

            <Wrapper>
              <InputComment
                name="comment"
                placeholder="Comment"
                component="textarea"
              />

              <StyleErrorMessage name="comment">
                {(msg) => <Error>{msg}</Error>}
              </StyleErrorMessage>
            </Wrapper>

            <Button type="submit">
              Send
            </Button>
          </Form>
        </Formik>
      </NeedHelpContainer>
    </>
  );
};

export default NeedHelpModal;
