import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getData, url } from "../../Utills/fetch-data/fetchData.utills";

import { Container } from "./breed-details.styles";


const BreedsDetails = () => {
	const [cats, setCats] = useState([]);
	const { breeds } = useParams();

	const breedsUrl = `https://api.thecatapi.com/v1/images/search?has_breeds=1&breed_ids=${breeds}&api_key=live_5kUSd1JtpPS034duZAAySNladWpg9zfRH6nbqcD81xdkmtDXeu3ulbPrFnP58P2A`

  useEffect(() => {

	const fetchCats = async () => {
		try {
			const catsData = await getData(breedsUrl);
			setCats(catsData);
		} catch (error) {
			console.error('Error fetching cat data:', error);
		}
	};

	fetchCats();

  }, []);

	if (!cats || cats.length === 0) {
    return <p>Завантаження...</p>;
  }
	
	const breedDetails = cats[0].breeds[0];
	const name = breedDetails && breedDetails.name;
	const description = breedDetails && breedDetails.description;
	const temperament = breedDetails && breedDetails.temperament;
	const origin = breedDetails && breedDetails.origin;
	const metric = breedDetails && breedDetails.weight.metric;
	const life_span = breedDetails && breedDetails.life_span;
	const id = breedDetails && breedDetails.id;

  return (
		
		<Container>
			{breedDetails && (
				<div>
					<h3 className="info__title">{name}</h3>
					<p className="info__subtitle">{description}</p>
					<div className="info__content">
						<div className="info__column">
							<p className="info__text">Temperament: 
								<span className="info__temperament info__text-color"> {temperament}</span>
							</p>
						</div>
						<div className="info__column">
							<p className="info__text">Origin: 
								<span className="info__origin info__text-color"> {origin}</span>
							</p>
							<p className="info__text">Weight: 
								<span className="info__weight info__text-color"> {metric} kg</span>
							</p>
							<p className="info__text">Life span:
								<span className="info__lifespan info__text-color"> {life_span} year</span>
							</p>
						</div>
					</div>
				</div>
			)}
		</Container>
		
  )
}

export default BreedsDetails;