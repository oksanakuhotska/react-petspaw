import { useState, useEffect } from "react";
import { getData, url } from "../../Utills/fetch-data/fetchData.utills";

// `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=live_5kUSd1JtpPS034duZAAySNladWpg9zfRH6nbqcD81xdkmtDXeu3ulbPrFnP58P2A`

const CatsDirectory = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
  //   fetch(url, {
  //     headers: {
  //       "x-api-key": `${process.env.REACT_APP_API_KEY}`,
  //     },
  //   })
  // .then(response => response.json())
  // .then(data => setCats(data))
  // .catch(error => console.log(error))

	const fetchCats = async () => {
		const cats = await getData(`https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=live_5kUSd1JtpPS034duZAAySNladWpg9zfRH6nbqcD81xdkmtDXeu3ulbPrFnP58P2A`);
		setCats(cats);
	};

	fetchCats();

  }, [])

  return (
    <div>
      {cats.map((cats) => {

        return (
					<div key={cats.id}>
						<img src={cats.url} alt={cats.breeds[0].name} />
					</div>
        )
      })}
    </div>
  )
}

export default CatsDirectory;