import { Outlet } from 'react-router-dom';

import NavCards from '../../components/nav-cards/nav-cards.component';
import SideBarHeader from '../../components/side-bar-header/side-bar-header.component';
import SideBarMain from '../../components/side-bar-main/side-bar-main.component';

import { Container, SideBar, Pages } from './navigation-panel.styles';
import PagesHeader from '../../components/pages/page\'s-header/page\'s-header.component';

const NavigationPanel = () => {
	const isNonMobile = window.innerWidth >= 1100;

	return(
		<Container>
			<SideBar>
				<SideBarHeader />
				<SideBarMain />
				<NavCards />
			</SideBar>
			<Pages>
				<Outlet/>
			</Pages>
		</Container>
	)
};

export default NavigationPanel;