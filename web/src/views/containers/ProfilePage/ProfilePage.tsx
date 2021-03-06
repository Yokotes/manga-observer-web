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
import { setToken } from '../../components/ProfileLink/ProfileSlice';
import MyMangaList from '../../components/MyMangaList/MyMangaList';

const ProfilePage = () => {
  const profile = useSelector((state: RootState) => state.profile);
  const profileForm = useSelector((state: RootState) => state.profileForm);
  const dispatch = useDispatch();

  //
  // @Description: Submit function that build form data
  //   and send it to the server, after receiving response
  //   update the state
  //
  const submit = async () => {
    const data = new FormData();

    //
    // @Description: Check if passwords are different
    //
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
      return;
    }

    //
    // @Description: Add all key/value pars in form data variable
    //
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

    //
    // @Description: Send PUT request to the server.
    //   After receiving response change token and add Pop up message
    //
    await axios
      .put(`/api/v1/users/${profile._id}`, data, {
        headers: {
          Authorization: `Bearer ${profile.authToken}`,
        },
      })
      .then((res) => {
        if (res) {
          dispatch(setToken(res.data.access_token));
          dispatch(
            addMessage({
              message: 'Profile updated!',
              type: 'message',
            }),
          );
        }
      })
      .catch((err) => {
        dispatch(
          addMessage({
            message: 'Error: ' + err.request.message,
            type: 'error',
          }),
        );
      });
  };

  return (
    <StyledProfilePage>
      <h1 className="profile__h1">Profile settings</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          await submit();
        }}
      >
        <div className="form__content">
          {/* Profile input block */}
          <div className="profile__block">
            <h2 className="profile__h2">Profile image</h2>
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
            <h2 className="profile__h2">Login and password</h2>
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
      <h1 className="profile__h1">My manga list</h1>
      <MyMangaList />
    </StyledProfilePage>
  );
};

export default ProfilePage;
