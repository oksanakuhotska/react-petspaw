export const url = `https://api.thecatapi.com/v1/images/search?limit=60&has_breeds=1`;

export const urlBreeds = `https://api.thecatapi.com/v1/breeds`;

export const catOptionsGet = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
};

export const catOptionsPost = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
};

export const catOptionsDelete = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.REACT_APP_API_KEY,
  },
};

// const catUrl = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breeds}`;

// fetch(url, {
//   headers: {
//     "x-api-key": `${process.env.REACT_APP_API_KEY}`,
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const catsData = data;
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

export const getData = async (url) => {
  const response = await fetch(url, catOptionsGet);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
