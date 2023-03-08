import { ReactComponent as PrimaryLogo} from '../../assets/images/logo.svg';

import { Link, NavLink, Outlet } from 'react-router-dom';

import Voting from '../Voting/voting.component';
import Breeds from '../Breeds/breeds.component';
import Gallery from '../Gallery/gallery.component';

const NavigationPanel = () => {
	return(
		<>
			<div>

				<Link to='/'><PrimaryLogo /></Link>

				<div>Dark mode</div>
				<h1>Hi intern!</h1>
				<p>Welcome to MI 2022 Front-end test</p>
				<p>Lets start using The Cat API</p>
				
				<NavLink to='/voting'>
					<Voting />
				</NavLink>
				<NavLink to='/breeds'>
					<Breeds />
				</NavLink>
				<NavLink to='/gallery'>
					<Gallery />
				</NavLink>
				<Outlet/>
			</div>
		</>
	)
};

export default NavigationPanel;