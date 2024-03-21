import { useState, useEffect } from 'react';

function CatSorting({ onSort, breeds, onSelectedBreedChange, selectedBreed }) {
  const handleSelectChange = (event) => {
    const breedId = event.target.value;
    onSelectedBreedChange(breedId); // Викликаємо функцію зміни вибраної породи
  };

  useEffect(() => {
    onSort(selectedBreed);
  }, [selectedBreed, onSort]);

  return (
    <div>
      <h1>Cat Breeds</h1>
      <select value={selectedBreed} onChange={handleSelectChange}>
        <option value="">Select a breed</option>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
      <p>Selected Breed: {selectedBreed}</p>
    </div>
  );
}

function CatImages({ images }) {
  return (
    <div>
      {images.map(image => (
        <img key={image.id} src={image.url} alt="Cat" />
      ))}
    </div>
  );
}

function GalleryCatsDirectory() {
  const [images, setImages] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds');
        const data = await response.json();
        setBreeds(data);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchData();
  }, []);

  const fetchImages = async (breedId) => {
    if (!breedId) return; // Перевіряємо, чи вибрана порода не пуста
    const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=2&has_breeds=1&${breedId}&api_key=live_5kUSd1JtpPS034duZAAySNladWpg9zfRH6nbqcD81xdkmtDXeu3ulbPrFnP58P2A`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleSelectedBreedChange = (breedId) => {
    setSelectedBreed(breedId);
    fetchImages(breedId); // Викликаємо fetchImages при зміні вибраної породи
  };

  return (
    <div>
      <CatSorting
        onSort={fetchImages}
        breeds={breeds}
        onSelectedBreedChange={handleSelectedBreedChange}
        selectedBreed={selectedBreed} // Додаємо selectedBreed до CatSorting
      />
      <CatImages images={images} />
    </div>
  );
}

export default GalleryCatsDirectory;





// import { useState, useEffect } from 'react';

// function CatSorting({ onSort, breeds }) {
//   const [selectedBreed, setSelectedBreed] = useState('');

//   const handleSelectChange = (event) => {
//     setSelectedBreed(event.target.value);
//   };

//   useEffect(() => {
//     onSort(selectedBreed);
//   }, [selectedBreed, onSort]);

//   return (
//     <div>
//       <h1>Cat Breeds</h1>
//       <select value={selectedBreed} onChange={handleSelectChange}>
//         <option value="">Select a breed</option>
//         {breeds.map((breed) => (
//           <option key={breed.id} value={breed.id}>
//             {breed.name}
//           </option>
//         ))}
//       </select>
//       <p>Selected Breed: {selectedBreed}</p>
//     </div>
//   );
// }

// function CatImages({ images }) {
//   return (
//     <div>
//       {images.map(image => (
//         <img key={image.id} src={image.url} alt="Cat" />
//       ))}
//     </div>
//   );
// }

// function GalleryCatsDirectory({ selectedBreed }) {
//   const [images, setImages] = useState([]);
//   const [breeds, setBreeds] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.thecatapi.com/v1/breeds');
//         const data = await response.json();
//         setBreeds(data);
//       } catch (error) {
//         console.error('Error fetching breeds:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchImages = async (breedId) => {
//     const apiUrl = `https://api.thecatapi.com/v1/images?breed_ids=${selectedBreed}`;
    
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setImages(data);
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   return (
//     <div>
//       <CatSorting onSort={fetchImages} breeds={breeds} />
//       <CatImages images={images} />
//     </div>
//   );
// }

// export default GalleryCatsDirectory;







// import { useState, useEffect } from 'react';

// import { urlBreeds, getData } from '../../Utills/fetch-data/fetchData.utills';

// function CatSorting({ onSort }) {
//   const [breedsName, setBreedsName] = useState([]); // породи, що будуть витягнуті з апі
// 	const [limit, setLimit] = useState('5');
// 	const [type, setType] = useState('All');
//   const [selectedBreed, setSelectedBreed] = useState('None'); // вибрана порода
//   const [order, setOrder] = useState('Random');
// 	const [catsArray, setCatsArray] = useState([]);
// 	const [breeds, setBreeds] = useState([]);


  // useEffect(() => {
  //   const fetchBreedsName = async () => {
  //     try {
  //       const data = await getData(urlBreeds);
				
	// 			const names = data.map(breed => breed.breeds[0])

  //       setBreedsName(names);
  //     } catch (error) {
  //       console.error("Error fetching breeds:", error);
  //     }
  //   };

  //   fetchBreedsName();
  // }, []);

// 	useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(urlBreeds);
//         const data = await response.json();
//         const extractedBreeds = data.map(cat => ({ id: cat[0].id, breed: cat[0].name }));
//         setBreeds(extractedBreeds);
//       } catch (error) {
//         console.error('Error fetching breeds:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSelectChange = (event) => {
//     setSelectedBreed(event.target.value);
//   };	

//   useEffect(() => {
//     onSort(selectedBreed, order);
//   }, [selectedBreed, order, onSort]);

//   return (
//     <div>
//           <div>
// 						<label htmlFor="order">Order:</label>
// 						<select 
// 						// id="order" 
// 						// value={order} 
// 						// onChange={(e) => onOrderChange(e.target.value)}
// 						>
// 							<option value="random">Random</option>
// 							<option value="asc">Ascending</option>
// 							<option value="desc">Descending</option>
// 						</select>
// 					</div>
// 					<div>
// 						<label htmlFor="limit">Limit:</label>
// 						<select 
// 						// id="limit" value={limit} 
// 						// onChange={(e) => onLimitChange(e.target.value)}
// 						>
// 							<option value="all">All items</option>
// 							<option value="5">5 items per page</option>
// 							<option value="10">10 items per page</option>
// 							<option value="20">20 items per page</option>
// 						</select>
// 					</div>
// 					<div>
// 						<label htmlFor="type">Type:</label>
// 						<select id="type" value={type} 
// 						// onChange={(e) => onTypeChange(e.target.value)}
// 						>
// 							<option value="all">All</option>
// 							<option value="static">Static</option>
// 							<option value="animated">Animated</option>
// 						</select>
// 					</div>
// 					<div>
// 						<label htmlFor="breeds">Breeds:</label>
// 						<select id="breeds" 
// 						value={breedsName} 
// 						// onChange={(e) => onBreedChange(e.target.value)}
// 						>
//           {breedsName.map((breed) => (
//             <option key={breed.id} value={breed.id}>
//               {breed.name}
//             </option>
//           ))}
// 					</select>
// 				</div>
// 				<div>
//       <h1>Cat Breeds</h1>
//       <select value={selectedBreed} onChange={handleSelectChange}>
//         <option value="">Select a breed</option>
//         {breeds.map((breed, index) => (
//           <option key={index} value={breed.breed}>{breed.breed}</option>
//         ))}
//       </select>
//       <p>Selected Breed: {selectedBreed}</p>
//     </div>
//     </div>
//   );
// }

// function CatImages({ images }) {
//   return (
//     <div>
//       {images.map(image => (
//         <img key={image.id} src={image.url} alt="Cat" />
//       ))}
//     </div>
//   );
// }

// function GalleryCatsDirectory() {
//   const [images, setImages] = useState([]);

//   async function fetchImages(breedsName, order) {
//     const breedIds = breedsName !== 'none' ? breedsName : '';
// 		const apiUrl = `https://api.thecatapi.com/v1/images`;
//     // const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=10&order=${order}&breed_ids=${breedIds}`;
    
//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setImages(data); // Отримуємо масив зображень
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   }

//   return (
//     <div>
//       <CatSorting onSort={(breedsName, order) => fetchImages(breedsName, order)} />
//       <CatImages images={images} /> {/* Передаємо масив зображень як властивість */}
//     </div>
//   );
// }

// export default GalleryCatsDirectory;





// import React, { useEffect, useState } from "react";
// import SortTableGallery from "../sort-table-gallery/sort-table-gallery.component";
// import CatsGridCard from "../cats-grid-card/cats-grid-card.component";
// import { DirectoryContainer } from "./gallery-cats-directory.styles";
// import { ICON_BUTTON_TYPE_CLASSES } from "../buttons/iconButton/iconButton.component";

// const GalleryCatsDirectory = () => {
//   const [order, setOrder] = useState("asc");
//   const [limit, setLimit] = useState("all");
//   const [type, setType] = useState("all");
//   const [breeds, setBreeds] = useState([]);
//   const [selectedBreed, setSelectedBreed] = useState("");
//   const [filteredBreeds, setFilteredBreeds] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://api.thecatapi.com/v1/breeds");
//         if (!response.ok) {
//           throw new Error("Failed to fetch breeds");
//         }
//         const data = await response.json();
//         setBreeds(data);
//         setFilteredBreeds(data); // Initialize filteredBreeds with all breeds
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     filterBreeds();
//   }, [order, limit, type, selectedBreed, breeds]);

//   const filterBreeds = () => {
//     const filtered = breeds.filter((breed) => {
//       const matchesOrder = true; // Assuming ascending order by default
//       const matchesLimit = limit === "all" || breeds.length <= parseInt(limit, 10);
//       const matchesType = type === "all" || breed.type === type;
//       const matchesBreed = selectedBreed === "" || breed.id === selectedBreed;
//       return matchesOrder && matchesLimit && matchesType && matchesBreed;
//     });
//     setFilteredBreeds(filtered);
//   };

//   const handleOrderChange = (value) => {
//     setOrder(value);
//   };

//   const handleLimitChange = (value) => {
//     setLimit(value);
//   };

//   const handleTypeChange = (value) => {
//     setType(value);
//   };

//   const handleBreedChange = (value) => {
//     setSelectedBreed(value);
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <>
//       {filteredBreeds && filteredBreeds.length > 0 ? (
//         <>
//           <SortTableGallery
//             order={order}
//             limit={limit}
//             type={type}
//             breeds={breeds}
//             onOrderChange={handleOrderChange}
//             onLimitChange={handleLimitChange}
//             onTypeChange={handleTypeChange}
//             onBreedChange={handleBreedChange}
//           />
//           <DirectoryContainer>
//             {filteredBreeds.map((breed) => (
//               <CatsGridCard
//                 key={breed.id}
//                 src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
//                 alt={breed.name}
//                 to={`/breeds/${breed.id}`}
//                 buttonText={breed.name}
//                 keyProp={breed.id}
//                 buttonType={ICON_BUTTON_TYPE_CLASSES.base}
//                 buttonIcon="favourite-outline"
//               />
//             ))}
//           </DirectoryContainer>
//         </>
//       ) : (
//         <p>No breeds found.</p>
//       )}
//     </>
//   );
// };

// export default GalleryCatsDirectory;
