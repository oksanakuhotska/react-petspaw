
import { TEXT_BUTTON_TYPE_CLASSES } from "../buttons/textButton/textButton.component";

import {
  ImageContainer,
  CardImageOverlay,
  CardButtonWrapper,
  CardLink,
  CenteredButton,
} from "./cats-grid-card.styles";

const CatsGridCard = ({ src, alt, to, buttonText, keyProp }) => {
  return (
    <ImageContainer key={keyProp}>
      <img src={src} alt={alt} />
      <CardImageOverlay />
      <CardButtonWrapper>
        <CardLink to={to}>
          <CenteredButton buttonType={TEXT_BUTTON_TYPE_CLASSES.breedsname}>
            {buttonText}
          </CenteredButton>
        </CardLink>
      </CardButtonWrapper>
    </ImageContainer>
  );
};

export default CatsGridCard;
