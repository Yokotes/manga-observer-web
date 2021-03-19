import * as React from 'react';
import { StyledAutocompleteItem } from './Search.styles';

type AutoCompleteItemProps = {
  title: string;
  img: string;
  onClick(): void;
};

const AutocompleteItem = ({ title, img, onClick }: AutoCompleteItemProps) => {
  return (
    <StyledAutocompleteItem onClick={onClick}>
      <img src={img} alt="Manga image" className="item__img" />
      <h4 className="item__title">{title}</h4>
    </StyledAutocompleteItem>
  );
};

export default AutocompleteItem;
