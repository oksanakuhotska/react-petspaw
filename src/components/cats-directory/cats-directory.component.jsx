import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

import { getData, url } from "../../Utills/fetch-data/fetchData.utills";
import { TEXT_BUTTON_TYPE_CLASSES } from "../buttons/textButton/textButton.component";

import { DirectoryContainer, ImageContainer, CardImageOverlay, CardButtonWrapper, CardLink, CenteredButton} from "./cats-directory.styles";

// `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=live_5kUSd1JtpPS034duZAAySNladWpg9zfRH6nbqcD81xdkmtDXeu3ulbPrFnP58P2A`

const CatsDirectory = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
  //   fetch(url, {
  //     headers: {
  //       "x-api-key": `${process.env.REACT_APP_API_KEY}`,
  //     },
  //   })
  // .then(response => response.json())
  // .then(data => setCats(data))
  // .catch(error => console.log(error))

	const fetchCats = async () => {
		const cats = await getData(url);
		setCats(cats);
	};

	// const cats = await getData(`https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=live_5kUSd1JtpPS034duZAAySNladWpg9zfRH6nbqcD81xdkmtDXeu3ulbPrFnP58P2A`);
	// 	setCats(cats);
	// };

	fetchCats();

  }, [])

  // const navigate = useNavigate();
	// const onNavigateHandler = () => navigate("breeds/:breeds"); didn't use

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