import React, { useState, useEffect } from 'react';
import { getData, url } from '../../Utills/fetch-data/fetchData.utills';
import { useParams } from 'react-router-dom';

const DropDown = () => {
  const [options, setOptions] = useState([]);

  // const { breeds } = useParams();
	// const catUrl = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breeds}`;

  useEffect(() => {
    const fetchCats = async () => {
      const catsData = await getData(url);
      setOptions(catsData);
    };

    fetchCats();
  }, []);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.thecatapi.com/v1/breeds');
  //       const data = await response.json();
  //       setOptions(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <select>
      {options.map((option) => (
        <option key={option.breeds[0].name} value={option.breeds[0].name}>
          {option.breeds[0].name}
        </option>
      ))}
    </select>
  );

//зробити виведення котів


};

export default DropDown;
