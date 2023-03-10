import React from 'react';
import VoteImg from "../../assets/images/votetable.png";
import BreedsImg from "../../assets/images/breeds.png";
import GalleryImg from "../../assets/images/gallery.png";

import NavCard from '../NavCard/navCard.component';
import { CARD_TYPE_CLASSES } from '../nav-card-body/nav-card-body.component';

import { Container } from './NavCards.styles';

const categories = [
  {
    id: 1,
    title: 'voting',
    imageUrl: VoteImg,
    route: 'voting',
    cardBodyType: CARD_TYPE_CLASSES.voting,
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
          <NavCard key={category.id} category={category} />
        ))}
			</Container>
	)
}

export default NavCards;