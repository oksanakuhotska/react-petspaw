import VoteImg from "../assets/images/votetable.png";
import BreedsImg from "../assets/images/breeds.png";
import GalleryImg from "../assets/images/gallery.png";

import { CARD_TYPE_CLASSES } from "../components/nav-card-body/nav-card-body.component";

export const categories = [
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