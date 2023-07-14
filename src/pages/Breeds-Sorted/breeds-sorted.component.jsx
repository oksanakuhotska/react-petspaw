import { useParams } from "react-router-dom";
import IconButton, { ICON_BUTTON_TYPE_CLASSES } from "../../components/buttons/iconButton/iconButton.component";
import TextButton, { TEXT_BUTTON_TYPE_CLASSES } from "../../components/buttons/textButton/textButton.component";
import PagesHeader from "../../components/pages/page's-header/page's-header.component";
import { Body, Container } from "./breeds-sorted.styles";

const BreedsSorted = () => {

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
				<div></div>
			</Body>
    </Container>
	);
};

export default BreedsSorted;