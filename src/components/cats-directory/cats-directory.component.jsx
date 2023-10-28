// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from "react";

// import { getData, url } from "../../Utills/fetch-data/fetchData.utills";
import { TEXT_BUTTON_TYPE_CLASSES } from "../buttons/textButton/textButton.component";

import { DirectoryContainer, ImageContainer, CardImageOverlay, CardButtonWrapper, CardLink, CenteredButton} from "./cats-directory.styles";

const CatsDirectory = ({ cats }) => {
  // const [cats, setCats] = useState([])

  // useEffect(() => {
  	//const fetchCats = async () => {
	// 	const cats = await getData(url);
	// 	setCats(cats);
	// };

	// fetchCats();

  // }, [])

  return (
    <DirectoryContainer>
      {cats.map((cats) => {

        return (
					<ImageContainer key={`${cats.breeds[0].name}-${cats.id}`}>
            <img src={cats.url} alt={cats.breeds[0].name} />
            <CardImageOverlay />
              
            <CardButtonWrapper>
              <CardLink 
								to={`/breeds/${cats.breeds[0].id}`}
							>
                <CenteredButton buttonType={TEXT_BUTTON_TYPE_CLASSES.breedsname}>{cats.breeds[0].name}</CenteredButton>
              </CardLink>
            </CardButtonWrapper>
					</ImageContainer>
        )
      })}
    </DirectoryContainer>
  )
}

export default CatsDirectory;