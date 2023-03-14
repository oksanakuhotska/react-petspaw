import { ReactComponent as PrimaryLogo} from '../../assets/images/logo.svg';

import { Link } from 'react-router-dom';

import { HeaderContainer } from './side-bar-header.styles';

const SideBarHeader = () => {
	return(
		<HeaderContainer>
			<Link to='/'>
				<PrimaryLogo />
			</Link>
			<div>Dark mode</div>
		</HeaderContainer>
	)
}

export default SideBarHeader;