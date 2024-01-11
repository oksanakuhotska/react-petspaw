import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate, Link } from "react-router-dom";

import IconButton, { ICON_BUTTON_TYPE_CLASSES } from "../../components/buttons/iconButton/iconButton.component";
import TextButton, { TEXT_BUTTON_TYPE_CLASSES } from "../../components/buttons/textButton/textButton.component";
import PagesHeader from "../../components/pages/page's-header/page's-header.component";
import Slider from "../../components/slider/slider.component";
import BreedsDetails from "../../components/breed-details/breed-details.component";
import SpriteIcon from "../../components/icon/icon.component";

import { Body, ButtonsContainer, Container, SliderContainer, BackLink } from "./breeds-sorted.styles";

const BreedsSorted = () => {
	const [cat, setCat] = useState([]);
	const { breeds } = useParams();
	const navigate = useNavigate();

	const catUrl = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breeds}`;

	const getData = async (catUrl) => {
    try {
      const response = await fetch(catUrl, { method: "GET" });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching cat data:", error);
      return [];
    }
  };

	useEffect(() => {
    const fetchCat = async () => {
      try {
        const catData = await getData(catUrl);
        setCat(catData);
      } catch (error) {
        console.error("Error fetching cat data:", error);
      }
    };

    fetchCat();
  }, [catUrl]);
	
		const slides = cat.length > 0 ? [
			{url: `${cat[0].url}`, title: `${cat[0].id}`},
			{url: `${cat[1].url}`, title: `${cat[1].id}`},
			{url: `${cat[2].url}`, title: `${cat[2].id}` },
			{url: `${cat[3].url}`, title: `${cat[3].id}` },
			{url: `${cat[4].url}`, title: `${cat[4].id}`},
		] : [];
	
	return (
		<Container>
			<PagesHeader />
			<Body>
				<ButtonsContainer>
					<IconButton 
						buttonType={ICON_BUTTON_TYPE_CLASSES.base}
						onClick={() => navigate(-1)}
					>
						<SpriteIcon icon="arrow-left"/>
					</IconButton>
					<TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.base}>
						<BackLink to="/breeds">BREEDS</BackLink>
					</TextButton>
					<TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.breedsid}>{breeds}</TextButton>
				</ButtonsContainer>
				<SliderContainer>
					{cat.length > 0 && (
						<Slider slides={slides}/>
					)}
				</SliderContainer>
				<BreedsDetails/>
			</Body>
    </Container>
	);
};

export default BreedsSorted;