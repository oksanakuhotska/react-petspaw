import React from 'react';
import NavCard from '../NavCard/navCard.component';
import VoteImg from "../../assets/images/votetable.png";
import BreedsImg from "../../assets/images/breeds.png";
import GalleryImg from "../../assets/images/gallery.png";
import { Container } from './navCards.styles';
import { CARD_TYPE_CLASSES } from '../NavCard/navCard.component';

const categories = [
  {
    id: 1,
    title: 'voting',
    imageUrl: VoteImg,
    route: 'voting',
    cardBodyType: "CARD_TYPE_CLASSES.voting",
  },
  {
    id: 2,
    title: 'breeds',
    imageUrl: BreedsImg,
    route: 'breeds',
    cardBodyType: CARD_TYPE_CLASSES.breeds,
  },
  {
    id: 3,
    title: 'gallery',
    imageUrl: GalleryImg,
    route: 'gallery',
    cardBodyType: CARD_TYPE_CLASSES.gallery,
  },
];

const NavCards = () => {
	return (
			<Container>
        {categories.map((category) => (
          <NavCard key={category.id} category={category} cardBodyType={category.cardBodyType} />
        ))}
			</Container>
	)
}

export default NavCards;