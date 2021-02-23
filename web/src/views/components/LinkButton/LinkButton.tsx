import * as React from 'react';
import StyledLinkButton from './LinkButton.styles';

type LinkButtonProps = {
  children: React.ReactChild;
  className?: string;
  onClick?(): void;
};

const LinkButton = ({ children, className, onClick }: LinkButtonProps) => {
  return (
    <StyledLinkButton className={className} onClick={onClick}>
      {children}
    </StyledLinkButton>
  );
};

export default LinkButton;
