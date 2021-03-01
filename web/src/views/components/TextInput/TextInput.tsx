import * as React from 'react';
import StyledTextInput from './TextInput.styles';

type TextInputProps = {
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
  placeHolder?: string;
  className?: string;
  type?: 'text' | 'email' | 'password';
  value?: string;
};

const TextInput = ({
  onChange = null,
  placeHolder = 'Text...',
  className,
  type = 'text',
  value,
}: TextInputProps) => {
  return (
    <StyledTextInput
      type={type}
      onChange={onChange}
      placeholder={placeHolder}
      className={className}
      defaultValue={value}
    />
  );
};

export default TextInput;
