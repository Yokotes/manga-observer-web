import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showLogIn } from '../../modals/LogInModal/LogInModalSlice';
import { showSignUp } from '../../modals/SignUpModal/SignUpModalSlice';
import { RootState } from '../../store';
import LinkButton from '../LinkButton/LinkButton';
import { addMessage } from '../PopUp/PopUpSlice';
import { StyledProfileLink, StyledSignUpLink } from './ProfileLink.styles';
import {
  getTokenFromStorage,
  setId,
  setImg,
  setName,
  setMangaToUpload,
  signOut,
} from './ProfileSlice';

const ProfileLink = () => {
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  //
  // @Description: Get JWT from local storage and
  //  write it to the state.
  //  Then get user name, id, and img from the server and write them to the state
  //
  useEffect(() => {
    dispatch(getTokenFromStorage());

    if (profile.authToken) {
      axios
        .get('/api/v1/profile', {
          headers: {
            Authorization: `Bearer ${profile.authToken}`,
          },
        })
        .then((res) => {
          dispatch(setName(res.data.name));
          dispatch(setId(res.data._id));
          dispatch(setImg(res.data.img));
          dispatch(setMangaToUpload(res.data.mangaList));
        })
        .catch((err) => {
          dispatch(
            addMessage({
              message: 'Error: ' + err.request.message,
              type: 'error',
            }),
          );
        });
    }
  }, [profile.authToken]);

  return profile.authToken ? (
    <StyledProfileLink>
      <Link to="/profile">
        <img src={profile.img} className="profile-link__img" />
      </Link>
      <div className="profile-link__content">
        <p className="profile-link__name">{profile.name}</p>
        <LinkButton
          className="profile-link__btn"
          onClick={() => dispatch(signOut())}
        >
          Sign Out
        </LinkButton>
      </div>
    </StyledProfileLink>
  ) : (
    <StyledSignUpLink>
      You have an account?
      <LinkButton onClick={() => dispatch(showLogIn())}>Sign In</LinkButton>|
      <LinkButton onClick={() => dispatch(showSignUp())}>
        Create an account
      </LinkButton>
    </StyledSignUpLink>
  );
};

export default ProfileLink;
