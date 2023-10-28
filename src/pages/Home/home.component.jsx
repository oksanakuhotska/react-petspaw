import homeImg from "../../assets/images/girl-and-pet.png";

import { HomeImage, Overlay, Container } from "./home.styles";

const Home = () => {
	return (
		<Container>
			<HomeImage src={homeImg} alt="girl-and-pet.png" />
			<Overlay />
		</Container>
	);
};

export default Home;