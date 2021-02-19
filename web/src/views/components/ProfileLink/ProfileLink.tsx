import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/views/store';
import { StyledProfileLink, StyledSignUpLink } from './ProfileLink.styles';

const ProfileLink = () => {
  const profile = useSelector((state: RootState) => state.profile);

  return profile._id ? (
    <StyledProfileLink>
      <Link to="/profile">Profile Link</Link>
    </StyledProfileLink>
  ) : (
    <StyledSignUpLink>SignIn</StyledSignUpLink>
  );
};

export default ProfileLink;
