import { useParams } from "react-router-dom";

import IconButton, { ICON_BUTTON_TYPE_CLASSES } from "../../components/buttons/iconButton/iconButton.component";
import TextButton, { TEXT_BUTTON_TYPE_CLASSES } from "../../components/buttons/textButton/textButton.component";
import PagesHeader from "../../components/pages/page's-header/page's-header.component";
import Slider from "../../components/slider/slider.component";

import { Body, Container, SliderContainer } from "./breeds-sorted.styles";

const BreedsSorted = () => {
	const slides = [
		{url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg', title: 'cat1'},
		{url: 'https://img.freepik.com/premium-photo/grey-stripped-mixed-breed-cat-sitting-isolated-white_191971-20618.jpg', title: 'cat2'},
		{url: 'https://img.freepik.com/premium-photo/grey-stripped-mixed-breed-cat-sitting-isolated-white_191971-20618.jpg', title: 'cat3'},
	]

	const { breeds } = useParams();

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