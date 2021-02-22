import * as React from 'react';
import StyledTextInput from './TextInput.styles';

type TextInputProps = {
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
  placeHolder?: string;
  className?: string;
  type?: 'text' | 'email' | 'password';
};

const TextInput = ({
  onChange = null,
  placeHolder = 'Text...',
  className,
  type = 'text',
}: TextInputProps) => {
  return (
    <StyledTextInput
      type={type}
      onChange={onChange}
      placeholder={placeHolder}
      className={className}
    />
  );
};

export default TextInput;
