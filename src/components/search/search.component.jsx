
import IconButton, { ICON_BUTTON_TYPE_CLASSES } from '../buttons/iconButton/iconButton.component';
import { Icon } from "../icon/icon.component";

import { SearchContainer, SearchForm, SearchInput } from "./search.styles";

const Search = () => {

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
        />
        <IconButton buttonType={ICON_BUTTON_TYPE_CLASSES.base} type="submit">
          <Icon icon="search" />
        </IconButton>
      </SearchForm>
    </SearchContainer>
  )
}

export default Search;