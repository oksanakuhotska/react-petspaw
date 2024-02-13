import React, { useEffect, useState } from "react";
import { getData, urlBreeds } from "../../Utills/fetch-data/fetchData.utills";
import SortTableBreeds from "../sort-table-breeds/sort-table-breeds.component";
import { DirectoryContainer } from "./breeds-cats-directory.styles";
import CatsGridCard from "../cats-grid-card/cats-grid-card.component";

const BreedsCatsDirectory = () => {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [sortOrder, setSortOrder] = useState("Default");
  const [count, setCount] = useState(10);
  const [selectedBreed, setSelectedBreed] = useState("");

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
