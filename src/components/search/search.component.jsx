import Button, { BUTTON_TYPE_CLASSES } from '../buttons/button.component';
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
        <Button buttonType={BUTTON_TYPE_CLASSES.reactionhistory} type="submit">
          <Icon icon="search" />
        </Button>
      </SearchForm>
    </SearchContainer>
  )
}

export default Search;