
import { useState } from 'react';
import IconButton, { ICON_BUTTON_TYPE_CLASSES } from '../buttons/iconButton/iconButton.component';
import SpriteIcon from "../icon/icon.component";

import { SearchContainer, SearchForm, SearchInput } from "./search.styles";

const Search = ({ onChangeHandler }) => {
	// const [input, setInput] = useState('');

  return (
    <SearchContainer> 
      <SearchForm
        id="search-form"
        role="search"
      >
        <SearchInput
          type="search"
          placeholder="Search for breeds by name"
          name="user-search-request"
          aria-label="Search cats"
					// value={input}
					// onChange={(e) => setInput(e.target.value)}
					// onChange={onChangeHandler}
        />
        <IconButton buttonType={ICON_BUTTON_TYPE_CLASSES.base} type="submit">
          <SpriteIcon icon="search" />
        </IconButton>
      </SearchForm>
    </SearchContainer>
  )
}

export default Search;