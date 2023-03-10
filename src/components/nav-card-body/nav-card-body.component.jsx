import { 
	BaseCardBody, 
	VotingCardBody, 
	BreedsCardBody, 
	GalleryCardBody 
} from './nav-card-body.styles';

export const CARD_TYPE_CLASSES = {
	base: 'base',
	voting: 'voting-card',
	breeds: 'breeds-card',
	gallery: 'gallery-card',
};

export const getCardBody = (cardBodyType = CARD_TYPE_CLASSES.base) => (
	{
		[CARD_TYPE_CLASSES.base]: BaseCardBody,
		[CARD_TYPE_CLASSES.voting]: VotingCardBody,
		[CARD_TYPE_CLASSES.breeds]: BreedsCardBody,
		[CARD_TYPE_CLASSES.gallery]: GalleryCardBody,
	}[cardBodyType]
);

const CardBody = ({ children, cardBodyType, ...otherProps }) => {
  const CustomCardBody = getCardBody(cardBodyType);

  return (
  <CustomCardBody {...otherProps}>{children}</CustomCardBody>
  );
};

export default CardBody;