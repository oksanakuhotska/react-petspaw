export const url = `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=${process.env.REACT_APP_API_KEY}`;

fetch(url, {
  headers: {
    "x-api-key": `${process.env.REACT_APP_API_KEY}`,
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const catsData = data;
  })
  .catch(function (error) {
    console.log(error);
  });
