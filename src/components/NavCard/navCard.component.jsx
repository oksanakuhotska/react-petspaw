import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CardBody from '../nav-card-body/nav-card-body.component';

import { Card, CardImage } from './navCard.styles';

const NavCard = ({category}) => {
	const { imageUrl, title, route, cardBodyType } = category;
	const navigate = useNavigate();
	const onNavigateHandler = () => navigate(route);
	
	return (
			<Card>
				<CardBody cardBodyType={cardBodyType} >
					<CardImage src={imageUrl} alt={title} />
				</CardBody>
				<Button onClick={onNavigateHandler}>{title}</Button>
			</Card>
	)
}

export default NavCard;


