import GalleryCatsDirectory from "../../components/gallery-cats-directory/gallery-cats-directory.component";
import MainHeader from "../../components/main-header/main-header.component";
import TabHeader from "../../components/tab-header/tab-header.component";


const Gallery = () => {
	return (
		<>
			<MainHeader />
			< TabHeader 
					tabs="Gallery" 
			/>
			<GalleryCatsDirectory />
		</>
	);
};

export default Gallery;