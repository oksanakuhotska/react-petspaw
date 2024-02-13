import IconButton, { ICON_BUTTON_TYPE_CLASSES } from "../buttons/iconButton/iconButton.component";
import { TEXT_BUTTON_TYPE_CLASSES } from "../buttons/textButton/textButton.component";
import SpriteIcon from "../icon/icon.component";


import {
  ImageContainer,
  CardImageOverlay,
  CardButtonWrapper,
  CardLink,
  CenteredButton,
  ButtonIconWrapper,
} from "./cats-grid-card.styles";

const CatsGridCard = ({ src, alt, to, buttonText, buttonIcon, buttonType, keyProp }) => {
  return (
    <ImageContainer key={keyProp}>
      <img src={src} alt={alt} />
      <CardImageOverlay />
				{buttonType === TEXT_BUTTON_TYPE_CLASSES.breedsname ? (
					<CardButtonWrapper>
					<CardLink to={to}>
							<CenteredButton buttonType={TEXT_BUTTON_TYPE_CLASSES.breedsname}>
								{buttonText}
							</CenteredButton>
						</CardLink>
					</CardButtonWrapper>
				) : (
					<ButtonIconWrapper>
						<IconButton buttonType={ICON_BUTTON_TYPE_CLASSES.base}>
							<SpriteIcon icon={buttonIcon} />
						</IconButton>
					</ButtonIconWrapper>
				)}
    </ImageContainer>
  );
};

export default CatsGridCard;
