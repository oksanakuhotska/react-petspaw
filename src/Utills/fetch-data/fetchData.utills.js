// export const url = `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=${process.env.REACT_APP_API_KEY}`;

export const url = `https://api.thecatapi.com/v1/images/search?limit=100&has_breeds=1&api_key=live_5kUSd1JtpPS034duZAAySNladWpg9zfRH6nbqcD81xdkmtDXeu3ulbPrFnP58P2A`;

export const urlBreeds = `https://api.thecatapi.com/v1/breeds`;

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
  const response = await fetch(url, { method: "GET" });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};
