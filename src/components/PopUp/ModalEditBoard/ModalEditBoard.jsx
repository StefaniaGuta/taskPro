import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeModal } from '../../../redux/modal/modalSlice';
import {updateBoard} from '../../../redux/board/boardOperations';
import data from '../../../images/BgImages/images'
import urlIcon from '../../../images/icons/sprite.svg';
import CloseButton from '../CloseButton/CloseButton';
import ModalBoardIcons from '../ModalBoardIcons/ModalBoardIcons';
import { useEffect } from 'react';
import { useState } from 'react';

import {
  EditBoardSection,
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
  FormikFieldImage,
  Button,
  ContainerIconButton,
  ImgStyled,
  ImgBox,
} from './ModalEditBoard.styled';


const ModalEditBoard = (boardName) => {
  const [width, setWidth] = useState(window.innerWidth);  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  

  const handleSubmit = async (values, { resetForm }) => {
    try {
      //console.log('Submitting values:', values);
      const board = boardName.boardName.slug;
      const updates = {
          name: values.name,
          icon: values.icon,
          backgroundImage: values.backgroundImage,
      };

      const response = await dispatch(updateBoard({boardName:board, dataUpdate: updates}));
      // console.log('Update response:', response);

      if (response?.payload) {
          navigate(`/current/${board}`, {
              replace: true,
              state: {updates, transferedBoard: boardName.boardName},
          });
      }

      dispatch(closeModal());
      resetForm();
    } catch (error) {
        console.error('Error updating board:', error);
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
    <EditBoardSection>
      <ModalCard>
        <CloseButton />
        <Title>Edit board</Title>

        <Formik
          initialValues={{
            name: boardName.boardName.name,
            icon: boardName.boardName.icon,
            backgroundImage: boardName.boardName.backgroundImage
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <FormikForm>
            <FormFieldTitle>
              <FieldTitle
                type="text"
                name="name"
                title="You need to enter the name of the column"
                placeholder="Title"
              />
              <ErrorMessage name="name" component="p" />
            </FormFieldTitle>

            <Text id="my-radio-groupIcon">Icons</Text>
            <IconContainer role="group" aria-labelledby="my-radio-groupIcon">
              <FormikField name="icon" component={ModalBoardIcons} />
              <ErrorMessage name="icon" component="p" />
            </IconContainer>

            <Text id="my-radio-groupImage">Background</Text>
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

            <Button type="submit" >
              <ContainerIconButton>
                <svg width="14" height="14">
                  <use xlinkHref={`${urlIcon}#icon-plus`} />
                </svg>
              </ContainerIconButton>
              Edit
            </Button>
          </FormikForm>
        </Formik>
      </ModalCard>
    </EditBoardSection>
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
    ),
  iconId: yup.string(),
  backgroundId: yup.string(),
});

export default ModalEditBoard;
