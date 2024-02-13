// CatsDirectory component
import { useEffect, useState } from "react";
import { getData, urlBreeds } from "../../Utills/fetch-data/fetchData.utills";
import { TEXT_BUTTON_TYPE_CLASSES } from "../buttons/textButton/textButton.component";
import SortTableBreeds from "../sort-table-breeds/sort-table-breeds.component";
import {
  DirectoryContainer,
  ImageContainer,
  CardImageOverlay,
  CardButtonWrapper,
  CardLink,
  CenteredButton,
} from "./cats-directory.styles";

const CatsDirectory = () => {
	const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [sortOrder, setSortOrder] = useState('Default');
  const [count, setCount] = useState(10);
  const [selectedBreed, setSelectedBreed] = useState('');

	useEffect(() => {
    const fetchBreeds = async () => {
			try {
				const data = await getData(urlBreeds);
				setBreeds(data);
			} catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

	useEffect(() => {
    let filtered = breeds;

    if (selectedBreed) {
      filtered = breeds.filter(
        (breed) => breed.name.toLowerCase() === selectedBreed.toLowerCase()
      );
    }

    let sortedBreeds = [...filtered];

    if (sortOrder === 'A-Z') {
      sortedBreeds.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'Z-A') {
      sortedBreeds.sort((a, b) => b.name.localeCompare(a.name));
    }

    const updatedBreeds = sortedBreeds.slice(0, count);
    setFilteredBreeds(updatedBreeds);
  }, [sortOrder, count, selectedBreed, breeds]);

	const handleSortAZ = () => {
    setSortOrder('A-Z');
  };

  const handleSortZA = () => {
    setSortOrder('Z-A');
  };

  return (
		<>
			{filteredBreeds && filteredBreeds.length > 0 ? (
				<>
					<SortTableBreeds
          breeds={breeds}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          count={count}
          setCount={setCount}
          handleSortAZ={handleSortAZ}
          handleSortZA={handleSortZA}
        ></SortTableBreeds>
					<DirectoryContainer>
						{filteredBreeds.map((breed) => (
							<ImageContainer
							key={`${breed.name}-${breed.id}`}
							>
								<img src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`} alt={breed.name} />
							<CardImageOverlay />
							<CardButtonWrapper>
								<CardLink to={`/breeds/${breed.id}`}>
									<CenteredButton buttonType={TEXT_BUTTON_TYPE_CLASSES.breedsname}>
										{breed.name}
									</CenteredButton>
								</CardLink>
							</CardButtonWrapper>
						</ImageContainer>
						))}
					</DirectoryContainer>
				</>
			) : (
				<p>No breeds found.</p>
			)}
		</>
  );
};

export default CatsDirectory;
