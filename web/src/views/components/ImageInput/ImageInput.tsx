import * as React from 'react';
import StyledImageInput from './ImageInput.styles';

type ImageInputProps = {
  placeholder: string;
  onChange?(e?);
};

const ImageInput = ({ placeholder, onChange }: ImageInputProps) => {
  return (
    <StyledImageInput>
      <input type="file" onChange={onChange} />
      <img src={placeholder} />
    </StyledImageInput>
  );
};

export default ImageInput;
