import BurgerMenu from '../burger-menu/burger-menu.component';

import { BurgerButton, BurgerContainer, ButtonLine } from './burger.styles';

const Burger = () => {

  return (
    <BurgerContainer>
			<BurgerButton to='/'>
				<ButtonLine />
				<ButtonLine />
				<ButtonLine />
			</BurgerButton>
			<BurgerMenu />
		</BurgerContainer>
  )
}

export default Burger;
