import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageInput from '../../components/ImageInput/ImageInput';
import StyledProfilePage from './ProfilePage.styles';
import TextInput from '../../components/TextInput/TextInput';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { addMessage } from '../../components/PopUp/PopUpSlice';
import {
  setFormImg,
  setSubmitPassword,
  setUsername,
  setPassword,
} from './ProfileFormSlice';
import axios from 'axios';
const ProfilePage = () => {
  const profile = useSelector((state: RootState) => state.profile);
  const profileForm = useSelector((state: RootState) => state.profileForm);
  const dispatch = useDispatch();

  //
  // @Complete: Finish this function that send form data
  //  to the server!
  //
  const submit = async (): Promise<boolean> => {
    const data = new FormData();

    if (
      profileForm.password !== profileForm.submitPassword &&
      (profileForm.password !== '' || profileForm.submitPassword !== '')
    ) {
      dispatch(
        addMessage({
          message: 'Warning: Passwords are different!',
          type: 'warning',
        }),
      );
      return false;
    }

    for (const key in profileForm) {
      if (key === 'username' && profileForm.username === '') {
        data.append(key, profile.name);

        continue;
      }

      if (key === 'formImg') {
        const res = await fetch(profileForm.formImg);
        const img = await res.blob();

        data.append(key, img, key);
        continue;
      }

      data.append(key, profileForm[key]);
    }

    axios
      .put(`/api/v1/users/${profile._id}`, data, {
        headers: {
          Authorization: `Bearer ${profile.authToken}`,
        },
      })
      .then(() => true)
      .catch(() => false);
  };

  return (
    <StyledProfilePage>
      <h1 className="profile__h1">Profile settings</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const res = await submit();

          if (res) {
            dispatch(
              addMessage({
                message: 'Profile updated!',
                type: 'message',
              }),
            );
          } else {
            dispatch(
              addMessage({
                message: 'Error: Something went wrong',
                type: 'error',
              }),
            );
          }
        }}
      >
        <div className="form__content">
          {/* Profile input block */}
          <div className="profile__block">
            <h2 className="profile__h2">Change profile image</h2>
            <ImageInput
              onChange={(e) => {
                const img = e.target.files[0];

                if (img.type.includes('image')) {
                  dispatch(setFormImg(window.URL.createObjectURL(img)));
                } else {
                  dispatch(
                    addMessage({
                      message: 'Error: Selected files is not image!',
                      type: 'error',
                    }),
                  );
                }
              }}
              placeholder={
                profileForm.formImg ? profileForm.formImg : profile.img
              }
            />
          </div>

          {/* Profile input block */}
          <div className="profile__block">
            <h2 className="profile__h2">Change user data</h2>
            <TextInput
              className="profile__input"
              onChange={(e) => dispatch(setUsername(e.currentTarget.value))}
              value={profileForm.username ? profileForm.username : profile.name}
              placeHolder="Username..."
            />
            <TextInput
              className="profile__input"
              type="password"
              onChange={(e) => dispatch(setPassword(e.currentTarget.value))}
              placeHolder="Enter new password..."
            />
            <TextInput
              className="profile__input"
              type="password"
              onChange={(e) =>
                dispatch(setSubmitPassword(e.currentTarget.value))
              }
              placeHolder="Enter new password again..."
            />
          </div>
        </div>

        <PrimaryButton className="profile__submit-btn">
          Update profile
        </PrimaryButton>
      </form>
    </StyledProfilePage>
  );
};

export default ProfilePage;
