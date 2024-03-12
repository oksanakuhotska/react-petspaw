import React, { useEffect, useState } from "react";
import { getData, urlBreeds } from "../../Utills/fetch-data/fetchData.utills";
import SortTableBreeds from "../sort-table-breeds/sort-table-breeds.component";
import CatsGridCard from "../cats-grid-card/cats-grid-card.component";
import { TEXT_BUTTON_TYPE_CLASSES } from "../buttons/textButton/textButton.component";


import { DirectoryContainer } from "./breeds-cats-directory.styles";

const BreedsCatsDirectory = () => {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [sortOrder, setSortOrder] = useState("Default");
  const [count, setCount] = useState(10);
  const [selectedBreed, setSelectedBreed] = useState("");

	// selectedBreed: Це стан, що відповідає за обрану користувачем породу кішки. При виборі користувачем конкретної породи цей стан оновлюється з назвою обраної породи. Він використовується для фільтрації списку порід, щоб відображати лише ті, які відповідають обраній користувачем породі.

	// filteredBreeds: Це стан, що містить список порід кішок, які підлягають відображенню у компоненті. Цей список оновлюється в залежності від обраної користувачем породи, порядку сортування та кількості відображених порід. Він використовується для відображення карток кішок у компоненті BreedsCatsDirectory.
	
	// Тобто, selectedBreed визначає, яка порода обрана користувачем, а filteredBreeds - це список порід, які відповідають вибору користувача та іншим умовам фільтрації.
	

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const data = await getData(urlBreeds);
        setBreeds(data);
      } catch (error) {
        console.error("Error fetching breeds:", error);
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

    if (sortOrder === "A-Z") {
      sortedBreeds.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "Z-A") {
      sortedBreeds.sort((a, b) => b.name.localeCompare(a.name));
    }

    const updatedBreeds = sortedBreeds.slice(0, count);
    setFilteredBreeds(updatedBreeds);
  }, [sortOrder, count, selectedBreed, breeds]);

  const handleSortAZ = () => {
    setSortOrder("A-Z");
  };

  const handleSortZA = () => {
    setSortOrder("Z-A");
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
          />
          <DirectoryContainer>
            {filteredBreeds.map((breed) => (
              <CatsGridCard 
								key={breed.id}
								src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
								alt={breed.name}
								to={`/breeds/${breed.id}`}
								buttonText={breed.name}
								keyProp={breed.id}
								buttonType={TEXT_BUTTON_TYPE_CLASSES.breedsname}
							/>
            ))}
          </DirectoryContainer>
        </>
      ) : (
        <p>No breeds found.</p>
      )}
    </>
  );
};

export default BreedsCatsDirectory;
