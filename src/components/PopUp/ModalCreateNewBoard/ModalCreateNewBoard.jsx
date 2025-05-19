import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import ButtonModal from '../ButtonModal/ButtonModal';
import { createNewBoard, boardBackground } from '../../../redux/board/boardOperations';
import ModalBoardIcons from '../ModalBoardIcons/ModalBoardIcons';
import { useState, useEffect } from 'react';


import data from '../../../images/BgImages/images'


import CloseButton from '../CloseButton/CloseButton';
import {
  ModalCard,
  Title,
  ErrorMessage,
  FormikForm,
  FormFieldTitle,
  FieldTitle,
  Text,
  IconContainer,
  ImageContainer,
  FormikField,
  ImgBox,
  FormikFieldImage,
  NewBoardSection,
  ImgStyled,
} from './ModalCreateNewBoard.styled';

const ModalCreateNewBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector(state => state.auth.user.theme);
  const [width, setWidth] = useState(window.innerWidth);
  
  const handleSubmit = async (values) => {
    try {
      const response = await dispatch(createNewBoard(values));
      const userId = response.payload?.owner;
      const boardSlug = response.payload.slug
      if (userId && values.backgroundImage) {
        await dispatch(boardBackground({ userId, backgroundImage: values.backgroundImage }));
      }
      navigate(`/boards/${boardSlug}`, { replace: true, state: { name: values.name, icon: values.icon } });
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImageSource = (width, item) => {
    if (width < 768) {
      return item.mobile;
    } else if (width < 1000) {
      return item.tablet;
    } else {
      return item.image;
    }
  };


  return (
    <NewBoardSection>
      <ModalCard theme={theme}>
        <CloseButton />
        <Title theme={theme}>New board</Title>

        <Formik
          initialValues={{
            name: '', 
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <FormikForm>
            <FormFieldTitle>
              <FieldTitle
                theme={theme}
                type="text"
                name="name"
                title="You need to enter the name of the board"
                required
                placeholder="Title"
              />
              <ErrorMessage name="name" component="p" />
            </FormFieldTitle>

            <Text id="my-radio-groupIcon" theme={theme}>Icons</Text>
            <IconContainer role="group" aria-labelledby="my-radio-groupIcon">
              <FormikField name="icon" component={ModalBoardIcons} />
              <ErrorMessage name="icon" component="p" />
            </IconContainer>

            <Text id="my-radio-groupImage" theme={theme}>Background</Text>
            <ImageContainer role="group" aria-labelledby="my-radio-groupImage">
              {data.map(item => (
                <label key={item.id}>
                  <FormikFieldImage
                    style={{display: 'none'}}
                    type="radio"
                    name="backgroundImage"
                    value={getImageSource(width, item)}
                  
                  />
                  <ImgBox>
                    <ImgStyled 
                      width={28} 
                      height={28} 
                      src={getImageSource(width, item)}  
                      alt={item.id} 
                    />
                  </ImgBox>
                </label>
              ))}
              
              <ErrorMessage name="backgroundImage" component="p" />
            </ImageContainer>

            <ButtonModal theme={theme} buttonName={'Create'} />
          </FormikForm>
        </Formik>
      </ModalCard>
    </NewBoardSection>
  );
};

const schema = yup.object({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(30, 'Maximum 30 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)*$/,
      'Invalid name format'
    )
    .required('Title is required!'), 
  
});

export default ModalCreateNewBoard;
