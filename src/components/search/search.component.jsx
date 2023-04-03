import { SearchContainer, SearchForm, SearchInput } from "./search.styles";
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';


const url = '../../assets/images/sprite.svg';


const Icon = (props) => (
  <svg>
    <use xlinkHref={`${url}#${props.icon}`} />
  </svg>
);

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
          <svg>
            <use xlinkHref="../../assets/images/sprite.svg#search"></use>
          </svg>
          <Icon icon="search" />
        </Button>
      </SearchForm>
    
    </SearchContainer>
  )
}

export default Search;