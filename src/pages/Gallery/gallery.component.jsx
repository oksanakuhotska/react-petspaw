import MainHeader from "../../components/main-header/main-header.component";
import TabHeader from "../../components/tab-header/tab-header.component";


const Gallery = () => {
	return (
		<>
			<MainHeader />
			<h2>Gallery</h2>
			< TabHeader 
					tabs="Gallery" 
			/>
		</>
	);
};

export default Gallery;