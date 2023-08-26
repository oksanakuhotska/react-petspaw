import { Outlet } from 'react-router-dom';

import NavCards from '../../components/nav-cards/nav-cards.component';
import SideBarHeader from '../../components/side-bar-header/side-bar-header.component';
import SideBarMain from '../../components/side-bar-main/side-bar-main.component';

import { Container, SideBar, Pages } from './navigation-panel.styles';
// import PagesHeader from '../../components/pages/page\'s-header/page\'s-header.component';
import { useState } from 'react';

const NavigationPanel = () => {
	const [showPages, setShowPages] = useState(false);

  const handleTextButtonClick = () => {
    setShowPages(!showPages);
  };

	return(
		<Container>
			<SideBar showPages={showPages}>
				<SideBarHeader />
				<SideBarMain />
				<NavCards onNavButtonClick={handleTextButtonClick} />
			</SideBar>
			<Pages showPages={showPages}>
				<Outlet/>
			</Pages>
		</Container>
	)
};

export default NavigationPanel;