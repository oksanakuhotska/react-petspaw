
import { useEffect, useState } from 'react';
import IconButton, { ICON_BUTTON_TYPE_CLASSES } from '../buttons/iconButton/iconButton.component';
import SpriteIcon from "../icon/icon.component";

import { SearchContainer, SearchForm, SearchInput } from "./search.styles";

const Search = ({ onSearchChange }) => {
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		if (onSearchChange && typeof onSearchChange === 'function') {
			onSearchChange(searchTerm);
		}
	}, [searchTerm, onSearchChange]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

	const handleSearch = (e) => {
    e.preventDefault(); // Зупиняємо стандартну поведінку форми
    // Викликаємо функцію обробки пошуку з поточним searchTerm
    if (onSearchChange && typeof onSearchChange === 'function') {
      onSearchChange(searchTerm);
    }
  };

  return (
    <SearchContainer> 
      <SearchForm
        id="search-form"
        role="search"
				onSubmit={handleSearch} // Додаємо обробник події для форми
      >
        <SearchInput
          type="text"
          placeholder="Search for breeds by name"
          name="user-search-request"
          aria-label="Search cats"
					value={searchTerm}
					onChange={handleInputChange}
        />
        <IconButton 
					buttonType={ICON_BUTTON_TYPE_CLASSES.base} 
					type="submit"
					onClick={handleSearch}
				>
          <SpriteIcon icon="search" />
        </IconButton>
      </SearchForm>
    </SearchContainer>
  )
}

export default Search;