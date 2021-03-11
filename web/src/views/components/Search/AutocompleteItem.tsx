import * as React from 'react';
import { StyledAutocompleteItem } from './Search.styles';

type AutoCompleteItemProps = {
  title: string;
  img: string;
};

const AutocompleteItem = ({ title, img }: AutoCompleteItemProps) => {
  return (
    <StyledAutocompleteItem>
      <img src={img} alt="Manga image" className="item__img" />
      <h4 className="item__title">{title}</h4>
    </StyledAutocompleteItem>
  );
};

export default AutocompleteItem;
