import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import IconButton, { ICON_BUTTON_TYPE_CLASSES } from "../../components/buttons/iconButton/iconButton.component";
import TextButton, { TEXT_BUTTON_TYPE_CLASSES } from "../../components/buttons/textButton/textButton.component";
import PagesHeader from "../../components/pages/page's-header/page's-header.component";
import Slider from "../../components/slider/slider.component";

import { Body, Container, SliderContainer } from "./breeds-sorted.styles";

const BreedsSorted = () => {
	const [cat, setCat] = useState([])
	const { breeds } = useParams();

	const catUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breeds}`;

	const getData = async (catUrl) => {
	const response = await fetch(
		catUrl, 
		{ method: "GET"}
	);

	if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
	
	return await response.json();
	};

  useEffect(() => {

	const fetchCat = async () => {
		const cat = await getData(catUrl);
		setCat(cat);
	};
		
	fetchCat();

  }, [])

	console.log(cat, catUrl, breeds);
		const slides = [
			{url: `${cat}`, title: `${cat.id}`},
			{url: `${cat.url}`, title: `${cat.id}`},
			{url: `${cat.url}`, title: `${cat.id}` },
			{url: `${cat.url}`, title: `${cat.id}` },
			{url: `${cat.url}`, title: `${cat.id}`},
		]
	
	return (
		<Container>
			<PagesHeader />
			<Body>
				<div>
					<IconButton buttonType={ICON_BUTTON_TYPE_CLASSES.base}>-</IconButton>
					<TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.base}>BREEDS</TextButton>
					<TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.breedsid}>28</TextButton>
				</div>
				<SliderContainer>
					<Slider slides={slides}/>
				</SliderContainer>
			</Body>
    </Container>
	);
};

export default BreedsSorted;