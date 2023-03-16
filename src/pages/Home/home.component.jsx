import homeImg from "../../assets/images/girl-and-pet.png";

import { HomeImage, Overlay } from "./home.styles";

const Home = () => {
	return (
		<>
			<HomeImage src={homeImg} alt="girl-and-pet.png" />
			<Overlay></Overlay>
		</>
	);
};

export default Home;