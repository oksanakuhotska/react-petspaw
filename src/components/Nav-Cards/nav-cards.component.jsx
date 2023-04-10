import { categories } from '../../data/categories.data';

import NavCard from '../nav-card/nav-card.component';

import { Container } from './nav-cards.styles';

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