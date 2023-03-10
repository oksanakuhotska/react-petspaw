import { useNavigate } from 'react-router-dom';
import { Card, BaseCardBody, CardImage, VotingCardBody, BreedsCardBody, GalleryCardBody } from './navCard.styles';

export const CARD_TYPE_CLASSES = {
	base: "base",
	voting: 'voting-card',
	breeds: 'breeds-card',
	gallery: 'gallery-card'
};

const getCardBody = (cardBodyType = CARD_TYPE_CLASSES.base) => (
	{
		[CARD_TYPE_CLASSES.base]: BaseCardBody,
		[CARD_TYPE_CLASSES.voting]: VotingCardBody,
		[CARD_TYPE_CLASSES.breeds]: BreedsCardBody,
		[CARD_TYPE_CLASSES.gallery]: GalleryCardBody,
	}[cardBodyType]
)

export const CardBody = ({ children, cardBodyType, ...otherProps }) => {
  const CustomCardBody = getCardBody(cardBodyType);

  return (
  <CustomCardBody {...otherProps}>{children}</CustomCardBody>
  );
};

const NavCard = ({category}) => {
	const { imageUrl, title, route } = category;
	const navigate = useNavigate();
	const onNavigateHandler = () => navigate(route);
	
	return (
			<Card>
				<CardBody>
					<CardImage src={imageUrl} alt={title} />					
				</CardBody>
				<button onClick={onNavigateHandler}>{title}</button>
			</Card>
	)
}

export default NavCard;


