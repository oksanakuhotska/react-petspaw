import { ReactComponent as PrimaryLogo} from '../../assets/images/logo.svg';

import { Link, Outlet } from 'react-router-dom';

import Voting from '../Voting';
import Breeds from '../Breeds';
import Gallery from '../Gallery';

const NavigationPanel = () => {
	return(
		<>
			<div>

				<PrimaryLogo />

				<div>Dark mode</div>
				<h1>Hi intern!</h1>
				<p>Welcome to MI 2022 Front-end test</p>
				<p>Lets start using The Cat API</p>
				
				<Link to='/voting'>
					<Voting />
				</Link>
				<Link to='/breeds'>
					<Breeds />
				</Link>
				<Link to='/gallery'>
					<Gallery />
				</Link>
				<Outlet/>
			</div>
		</>
	)
};

export default NavigationPanel;