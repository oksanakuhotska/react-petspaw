import { Outlet } from 'react-router-dom';

import NavCards from '../../components/nav-cards/nav-cards.component';
import SideBarHeader from '../../components/side-bar-header/side-bar-header.component';

import { Container, SideBar, Pages } from './navigation-panel.styles';

const NavigationPanel = () => {
	return(
		<Container>
			<SideBar>
				<SideBarHeader />
				<h1>Hi intern!</h1>
				<p>Welcome to MI 2022 Front-end test</p>
				<p>Lets start using The Cat API</p>
			<NavCards />
			</SideBar>
			<Pages>
        <Outlet/>
      </Pages>
		</Container>
	)
};

export default NavigationPanel;