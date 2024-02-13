import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import IconButton, { ICON_BUTTON_TYPE_CLASSES } from '../buttons/iconButton/iconButton.component';
import SpriteIcon from "../icon/icon.component";

import { SearchContainer, SearchForm, SearchInput } from "./search.styles";

const Search = ({ onSearchChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || ""; // Отримати значення "q" або пустий рядок, якщо параметр відсутній

  useEffect(() => {
    if (onSearchChange && typeof onSearchChange === 'function') {
      onSearchChange(q);
    }
  }, [q, onSearchChange]);

  const handleInputChange = (e) => {
    setSearchParams({ q: e.target.value }, { replace: true });
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Зупиняємо стандартну поведінку форми
    // Викликаємо функцію обробки пошуку з поточним значенням q
    if (onSearchChange && typeof onSearchChange === 'function') {
      onSearchChange(q);
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
          value={q} // Оновлено значення на q
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
