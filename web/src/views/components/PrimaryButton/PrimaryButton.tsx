import * as React from 'react';
import StyledPrimaryButton from './PrimaryButton.styles';

type PrimaryButtonProps = {
  children: React.ReactChild;
  className?: string;
};

const PrimaryButton = ({ children, className }: PrimaryButtonProps) => {
  return (
    <StyledPrimaryButton className={className}>{children}</StyledPrimaryButton>
  );
};

export default PrimaryButton;
