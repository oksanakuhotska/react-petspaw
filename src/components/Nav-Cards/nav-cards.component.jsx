import { categories } from '../../data/categories.data';

import NavCard from '../nav-card/nav-card.component';

import { Container } from './nav-cards.styles';

const NavCards = ({ onNavButtonClick }) => {	
	
	return (
		<Container>
			{categories.map((category) => (
				<NavCard key={category.id} category={category} onNavButtonClick={onNavButtonClick} />
			))}
		</Container>
	)
}

export default NavCards;