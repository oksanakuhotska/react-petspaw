import { ReactComponent as PrimaryLogo} from '../../assets/images/logo.svg';

const NavigationPanel = () => {
	return(
		<>
			<div>

				<PrimaryLogo className='primary-logo'/>

				<div>Dark mode</div>
				<h1>Hi intern!</h1>
				<p>Welcome to MI 2022 Front-end test</p>
				<p>Lets start using The Cat API</p>
			</div>
		</>
	)
};

export default NavigationPanel;