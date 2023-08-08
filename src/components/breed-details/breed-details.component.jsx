import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getData, url } from "../../Utills/fetch-data/fetchData.utills";

import { Column, Container, Content, Text, SubText, SubTitle, Title } from "./breed-details.styles";


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
		
		<div>
			{breedDetails && (
				<Container>
					<Title>{name}</Title>
					<SubTitle>{description}</SubTitle>
					<Content>
						<Column>
							<Text>Temperament: 
								<SubText> {temperament}</SubText>
							</Text>
						</Column>
						<Column>
							<Text>Origin: 
								<SubText> {origin}</SubText>
							</Text>
							<Text>Weight: 
								<SubText> {metric} kg</SubText>
							</Text>
							<Text>Life span:
								<SubText> {life_span} year</SubText>
							</Text>
						</Column>
					</Content>
				</Container>
			)}
		</div>
		
  )
}

export default BreedsDetails;