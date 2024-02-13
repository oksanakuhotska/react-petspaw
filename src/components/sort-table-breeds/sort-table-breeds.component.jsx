import { useState } from "react";
import { 
	DropdownButton, 
	DropdownContainer, 
	DropdownItem, 
	DropdownList, 
	DropdownWrapper, 
	SortButton 
} from "./sort.table-breeds.styles";


const SortTableBreeds = ({
  breeds,
  selectedBreed,
  setSelectedBreed,
  sortOrder,
  setSortOrder,
  count,
  setCount,
  handleSortAZ,
  handleSortZA,
  children,
}) => {
  const [isBreedOpen, setIsBreedOpen] = useState(false);
  const [isCountOpen, setIsCountOpen] = useState(false);

  const toggleBreedDropdown = () => {
    setIsBreedOpen(!isBreedOpen);
    setIsCountOpen(false);
  };

  const toggleCountDropdown = () => {
    setIsCountOpen(!isCountOpen);
    setIsBreedOpen(false);
  };

  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
    setIsBreedOpen(false);
  };

  const handleCountSelect = (count) => {
    setCount(count);
    setIsCountOpen(false);
  };

  return (
    <>
      {breeds && breeds.length > 0 && (
        <DropdownContainer>
          <DropdownWrapper>
            <DropdownButton onClick={toggleBreedDropdown}>
              {selectedBreed ? selectedBreed : "All Breeds"}
            </DropdownButton>
            {isBreedOpen && (
              <DropdownList>
                <DropdownItem onClick={() => handleBreedSelect("")}>
                  All Breeds
                </DropdownItem>
                {breeds.map((breed) => (
                  <DropdownItem
                    key={breed.id}
                    onClick={() => handleBreedSelect(breed.name)}
                  >
                    {breed.name}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </DropdownWrapper>
          <DropdownWrapper>
            <DropdownButton onClick={toggleCountDropdown}>{count}</DropdownButton>
            {isCountOpen && (
              <DropdownList>
                <DropdownItem onClick={() => handleCountSelect(5)}>5</DropdownItem>
                <DropdownItem onClick={() => handleCountSelect(10)}>10</DropdownItem>
                <DropdownItem onClick={() => handleCountSelect(15)}>15</DropdownItem>
                <DropdownItem onClick={() => handleCountSelect(20)}>20</DropdownItem>
              </DropdownList>
            )}
          </DropdownWrapper>
          <SortButton onClick={handleSortAZ}>A-Z</SortButton>
          <SortButton onClick={handleSortZA}>Z-A</SortButton>
        </DropdownContainer>
      )}
      {children}
    </>
  );
};

export default SortTableBreeds;