import { useNavigate } from 'react-router-dom';

import TextButton, { TEXT_BUTTON_TYPE_CLASSES } from '../buttons/textButton/textButton.component';
import CardBody from '../nav-card-body/nav-card-body.component';

import { Card, CardImage } from './nav-card.styles';

const NavCard = ({category}) => {
	const { imageUrl, title, route, cardBodyType } = category;
	const navigate = useNavigate();
	const onNavigateHandler = () => navigate(route);

	
	return (
			<Card>
				<CardBody cardBodyType={cardBodyType} >
					<CardImage src={imageUrl} alt={title} />
				</CardBody>
				<TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.navcard}  onClick={onNavigateHandler}>{title}</TextButton>
			</Card>
	)
}

export default NavCard;


