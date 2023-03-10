import { useNavigate } from 'react-router-dom';
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
				<button onClick={onNavigateHandler}>{title}</button>
			</Card>
	)
}

export default NavCard;


