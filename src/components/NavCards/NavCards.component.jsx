import React from 'react';
import NavCard from '../NavCard/navCard.component';
import VoteImg from "../../assets/images/votetable.png";
import BreedsImg from "../../assets/images/breeds.png";
import GalleryImg from "../../assets/images/gallery.png";


const categories = [
  {
    id: 1,
    title: 'voting',
    imageUrl: VoteImg,
    route: 'voting',
  },
  {
    id: 2,
    title: 'breeds',
    imageUrl: BreedsImg,
    route: 'breeds',
  },
  {
    id: 3,
    title: 'gallery',
    imageUrl: GalleryImg,
    route: 'gallery',
  },
];



const NavCards = () => {
	return (
			<div className='control-panel'>
			
			{categories.map((category) => (
        <NavCard key={category.id} category={category} />
      ))}
			
			</div>
	)
}

export default NavCards;