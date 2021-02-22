import * as React from 'react';
import StyledPrimaryButton from './PrimaryButton.styles';

type PrimaryButtonProps = {
  children: React.ReactChild;
  className?: string;
  onClick?(): void;
};

const PrimaryButton = ({
  children,
  className,
  onClick,
}: PrimaryButtonProps) => {
  return (
    <StyledPrimaryButton className={className} onClick={onClick}>
      {children}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
