import { Formik } from 'formik';
import * as yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useState } from 'react';
import {editUser, currentUser} from '../../../redux/auth/authOperations';
import { useDispatch, useSelector} from 'react-redux';
import CloseButton from '../CloseButton/CloseButton';
import { closeModal } from '../../../redux/modal/modalSlice';

import {
  FormUpdateUser,
  FeedbackFormGroup,
  PasswordWrapper,
  InputForm,
  ToggleShowPassword,
  BtnWrapper,
  BtnUpdate,
  Edit,
  EditTitle,
  ProfilePhotoBlock,
  PhotoUser,
  LabelEditPhoto,
  InputEditPhoto,
  BtnSavePhotoUser,
  PhotoBox,
  UserIconSvg,
  EditProfileSection,
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
    .optional(),
  password: yup
    .string()
    .min(8)
    .max(64)
    .matches(/^[^\s]+$/, 'Password should not contain spaces'),
});

const EditProfile = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [isAvatarOnly, setIsAvatarOnly] = useState(false);
  const theme = useSelector(state => state.auth.user.theme);
  const user = useSelector(state => state.auth.user);
  
  const initialValues = {
    name: user?.name || '',
    email: user?.email || '',
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

      setShowSaveButton(false);

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
      name: values.name || user?.name,
      email: values.email || "",
      password: values.password || ""
    };

    if (values.password) {
      updatedUser.password = values.password;
    }

    if (isAvatarOnly && selectedAvatar) {
      const formData = new FormData();
      formData.append('name', updatedUser.name);
      formData.append('email', updatedUser.email);
      formData.append('password', updatedUser.password);
      formData.append('avatar', selectedAvatar);

      try {
        await dispatch(editUser(formData)).unwrap();
        await dispatch(currentUser());
        setShowSaveButton(false);
        resetForm();
        dispatch(closeModal());
      } catch (error) {
        console.log("Failed to update avatar:", error);
      }
      return;
    }

    try {
      await dispatch(editUser(updatedUser)).unwrap();

      resetForm();

      await dispatch(currentUser());
      dispatch(closeModal());
      return updatedUser;
    } catch (error) {
      console.log("Failed to update user:", error);
    }
};
  return (
    <EditProfileSection>
    <Edit theme={theme}>
      
        <CloseButton />
      
      <EditTitle theme={theme}>Edit profile</EditTitle>

      <ProfilePhotoBlock>
        <PhotoBox>
          {selectedAvatar || user?.avatarURL ? (
            <PhotoUser
              src={
                selectedAvatar
                  ? URL.createObjectURL(selectedAvatar)
                  : user?.avatarURL
              }
              alt="user avatar"
            ></PhotoUser>
          ) : (
            <UserIconSvg>
              <use xlinkHref={`${url}#icon-user_default`} />
            </UserIconSvg>
          )}
          {!showSaveButton && (
            <LabelEditPhoto htmlFor="inputFile" theme={theme}>
              +
            </LabelEditPhoto>
          )}
          {showSaveButton && (
            <BtnSavePhotoUser onClick={handleUpdateAvatar} theme={theme}>
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
              theme={theme}
              type="text"
              name="name"
              placeholder="Edit name"
              autoComplete="off"
            />
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <InputForm
              theme={theme}
              type="email"
              name="email"
              placeholder="Edit email"
              autoComplete="off"
            />
            
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <PasswordWrapper>
              <InputForm
                theme={theme}
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
          </FeedbackFormGroup>
          <BtnWrapper>
            <BtnUpdate type="submit" theme={theme}>
             Send
            </BtnUpdate>
          </BtnWrapper>
        </FormUpdateUser>
      </Formik>
    </Edit>
    </EditProfileSection>
  );
};

export default EditProfile;
