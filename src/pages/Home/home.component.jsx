import homeImg from "../../assets/images/girl-and-pet.png";

import { HomeImage, Overlay } from "./home.styles";

const Home = () => {
	return (
		<div>
			<HomeImage src={homeImg} alt="girl-and-pet.png" />
			<Overlay></Overlay>
		</div>
	);
};

export default Home;