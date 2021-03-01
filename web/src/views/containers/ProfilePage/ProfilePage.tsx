import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageInput from '../../components/ImageInput/ImageInput';
import StyledProfilePage from './ProfilePage.styles';
import TextInput from '../../components/TextInput/TextInput';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { addMessage } from '../../components/PopUp/PopUpSlice';

const ProfilePage = () => {
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  //
  // @Complete: Finish this function that send form data
  //  to the server!
  //
  const submit = (e) => {
    console.log(e);
  };

  return (
    <StyledProfilePage>
      <h1 className="profile__h1">Profile settings</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          submit(e.currentTarget);
        }}
      >
        <div className="form__content">
          {/* Profile input block */}
          <div className="profile__block">
            <h2 className="profile__h2">Change profile image</h2>
            <ImageInput
              onChange={() => {
                dispatch(
                  addMessage({
                    message: 'Image selected!',
                    type: 'message',
                  }),
                );
              }}
              placeholder={profile.img}
            />
          </div>

          {/* Profile input block */}
          <div className="profile__block">
            <h2 className="profile__h2">Change user data</h2>
            <TextInput
              className="profile__input"
              value={profile.name}
              placeHolder="Username..."
            />
            <TextInput
              className="profile__input"
              placeHolder="Enter new password..."
            />
            <TextInput
              className="profile__input"
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
