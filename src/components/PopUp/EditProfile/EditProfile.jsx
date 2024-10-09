import { Formik } from 'formik';
import * as yup from 'yup';
//import { toast } from 'react-toastify';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
//import Loader from '../../Loader/Loader';
import {editUser, refreshUser} from '../../../redux/auth/authOperations';
import { useDispatch} from 'react-redux';

import {
  FormUpdateUser,
  FeedbackFormGroup,
  PasswordWrapper,
  InputForm,
  ToggleShowPassword,
  BtnWrapper,
  BtnUpdate,

  StyleErrorMessage,
  Error,
  SuccessUpdateAvatar,
  Success,
  Edit,
  EditTitle,
  BtnClose,
  //===for avatar===/
  ProfilePhotoBlock,
  PhotoUser,

  LabelEditPhoto,
  InputEditPhoto,
  BtnSavePhotoUser,
  PhotoBox,
  UserIconSvg,
} from './EditProfile.styled';

import url from '../../../images/icons/sprite.svg';



const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Name should be at least 4 characters')
    .max(64, 'Name should not exceed 64 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)?$/,
      'Invalid name format'
    ),
  email: yup
    .string()
    .email('Invalid email')
    .test('email-format', 'Invalid email format', (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      emailRegex.test(value);
      if (!value) return true;
      return emailRegex.test(value);
    })
    .optional()
    .notRequired(),
  password: yup
    .string()
    .min(8)
    .max(64)
    .matches(/^[^\s]+$/, 'Password should not contain spaces'),
});

const EditProfile = ({toggleModal}) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [showAvatarSuccessMessage, setShowAvatarSuccessMessage] =useState(false);
  const [showNameSuccessMessage, setShowNameSuccessMessage] = useState(false);
  const [showEmailSuccessMessage, setShowEmailSuccessMessage] = useState(false);
  const [showPasswordSuccessMessage, setShowPasswordSuccessMessage] =useState(false);
  const [isAvatarOnly, setIsAvatarOnly] = useState(false);

  const initialValues = {
    name: refreshUser?.name || '',
    email: refreshUser?.email || '',
    password: '',
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setSelectedAvatar(file);
    setShowSaveButton(true);
    setIsAvatarOnly(true);
  };

  const handleUpdateAvatar = async () => {
    try {
      const formData = new FormData();
      formData.append('avatarImage', selectedAvatar);

      setShowAvatarSuccessMessage(true);
      setShowSaveButton(false);

      setTimeout(() => {
        setShowAvatarSuccessMessage(false);
      }, 4000);
      setIsAvatarOnly(false);
    } catch (error) {
      console.log(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleUpdateUser = async (values, { resetForm }) => {
    const updatedUser = {
      name: values.name || refreshUser?.name,
      email: values.email || refreshUser?.email,
    };
  
    if (values.password) {
      updatedUser.password = values.password;
    }
  
    if (isAvatarOnly && selectedAvatar) {
      const formData = new FormData();
      formData.append('name', updatedUser.name);
      formData.append('email', updatedUser.email);
      formData.append('password', updatedUser.password || "");
      formData.append('avatar', selectedAvatar);
  
      try {
        await dispatch(editUser(formData)).unwrap();
        setShowAvatarSuccessMessage(true);
        setTimeout(() => setShowAvatarSuccessMessage(false), 4000);
        setShowSaveButton(false);
        resetForm();
      } catch (error) {
        console.log("Failed to update avatar:", error);
      }
      return;
    }
  
    try {
      await dispatch(editUser(updatedUser)).unwrap();
      if (values.name) {
        setShowNameSuccessMessage(true);
        setTimeout(() => setShowNameSuccessMessage(false), 4000);
      }
      if (values.email) {
        setShowEmailSuccessMessage(true);
        setTimeout(() => setShowEmailSuccessMessage(false), 4000);
      }
      if (values.password) {
        setShowPasswordSuccessMessage(true);
        setTimeout(() => setShowPasswordSuccessMessage(false), 4000);
      }
      resetForm();
      return updatedUser;
    } catch (error) {
      console.log("Failed to update user:", error);
    }
  };
  
     
  return (
    <Edit>
      <BtnClose
        style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          cursor: 'pointer',
        }}
      >
        X
      </BtnClose>
      <EditTitle>Edit profile</EditTitle>

      <ProfilePhotoBlock>
        {showAvatarSuccessMessage && (
          <SuccessUpdateAvatar style={{ color: 'green' }}>
            Field successfully updated
          </SuccessUpdateAvatar>
        )}
        <PhotoBox>
          {selectedAvatar || refreshUser?.avatarURL ? (
            <PhotoUser
              src={
                selectedAvatar
                  ? URL.createObjectURL(selectedAvatar)
                  : refreshUser?.avatarURL
              }
              alt="user avatar"
            ></PhotoUser>
          ) : (
            <UserIconSvg>
              <use xlinkHref={`${url}#icon-user_default`} />
            </UserIconSvg>
          )}
          {!showSaveButton && (
            <LabelEditPhoto htmlFor="inputFile">
              <svg width="10" height="10">
                <use xlinkHref={`${url}#icon-plus+`} />
              </svg>
            </LabelEditPhoto>
          )}
          {showSaveButton && (
            <BtnSavePhotoUser onClick={handleUpdateAvatar}>
              +
            </BtnSavePhotoUser>
          )}
        </PhotoBox>

        

        <InputEditPhoto
          name="avatarURL"
          type="file"
          accept="image/*"
          id="inputFile"
          onChange={handleAvatarChange}
        />
      </ProfilePhotoBlock>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleUpdateUser}
        autoComplete="off"
      >
        <FormUpdateUser>
          <FeedbackFormGroup>
            <InputForm
              type="text"
              name="name"
              placeholder="Edit name"
              autoComplete="off"
            />
            <StyleErrorMessage name="name">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
            {showNameSuccessMessage && (
              <Success style={{ marginTop: '5px', color: 'green' }}>
                Field successfully updated
              </Success>
            )}
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <InputForm
              type="email"
              name="email"
              placeholder="Edit email"
              autoComplete="off"
            />
            
            <StyleErrorMessage name="email">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
            {showEmailSuccessMessage && (
              <Success style={{ marginTop: '5px', color: 'green' }}>
                Field successfully updated
              </Success>
            )}
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <PasswordWrapper>
              <InputForm
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Edit password"
                autoComplete="off"
              />
              <ToggleShowPassword onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <BsEyeSlash
                    color="var(--iconBSEyeColor)"
                    opacity="0.4000000059604645"
                    style={{ width: 18, height: 18 }}
                  />
                ) : (
                  <BsEye
                    color="var(--iconBSEyeColor)"
                    opacity="0.4000000059604645"
                    style={{ width: 18, height: 18 }}
                  />
                )}
              </ToggleShowPassword>
            </PasswordWrapper>
            <StyleErrorMessage name="password">
              {(msg) => <Error>{msg}</Error>}
            </StyleErrorMessage>
            {showPasswordSuccessMessage && (
              <Success style={{ marginTop: '5px', color: 'green' }}>
                Field successfully updated
              </Success>
            )}
          </FeedbackFormGroup>
          <BtnWrapper>
            <BtnUpdate type="submit">
             Send
            </BtnUpdate>
          </BtnWrapper>
        </FormUpdateUser>
      </Formik>
    </Edit>
  );
};

export default EditProfile;
