// CatsDirectory component
import { useEffect, useState } from "react";
import { getData, url } from "../../Utills/fetch-data/fetchData.utills";
import { TEXT_BUTTON_TYPE_CLASSES } from "../buttons/textButton/textButton.component";
import {
  DirectoryContainer,
  ImageContainer,
  CardImageOverlay,
  CardButtonWrapper,
  CardLink,
  CenteredButton,
} from "./cats-directory.styles";

const CatsDirectory = ({ cats }) => {
  const [fetchedCats, setFetchedCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const catsData = await getData(url);
      setFetchedCats(catsData);
    };

    fetchCats();
  }, []);

  const displayedCats = cats.length > 0 ? cats : fetchedCats;

  console.log(displayedCats);

  return (
    <DirectoryContainer>
      {displayedCats.map((cat) => {
        if (cat.breeds && cat.breeds[0]) {
          return (
            <ImageContainer key={`${cat.breeds[0].name}-${cat.id}`}>
              <img src={cat.url} alt={cat.breeds[0].name} />
              <CardImageOverlay />
              <CardButtonWrapper>
                <CardLink to={`/breeds/${cat.breeds[0].id}`}>
                  <CenteredButton buttonType={TEXT_BUTTON_TYPE_CLASSES.breedsname}>
                    {cat.breeds[0].name}
                  </CenteredButton>
                </CardLink>
              </CardButtonWrapper>
            </ImageContainer>
          );
        } else {
          console.warn("No breeds or breeds[0] in the cat:", cat);
          return null;
        }
      })}
    </DirectoryContainer>
  );
};

export default CatsDirectory;