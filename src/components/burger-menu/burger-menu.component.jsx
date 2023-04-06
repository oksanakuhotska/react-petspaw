import { categories } from "../../data/categories.data";

import NavCard from "../nav-card/nav-card.component";

import { BurgerOverlay, CardsContainer, } from "./burger-menu.styles";

const BurgerMenu = () => {

  return (
		<BurgerOverlay>
			<CardsContainer>
				{categories.map((category) => (
					<NavCard key={category.id} category={category} />
				))}
			</CardsContainer>
		</BurgerOverlay>
  )
}

export default BurgerMenu;