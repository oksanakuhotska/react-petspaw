import { useNavigate } from "react-router-dom";

import CatsDirectory from "../../cats-directory/cats-directory.component";

import { Container, Body, Header, BackLink } from "./page's-body.styles";
import IconButton, { ICON_BUTTON_TYPE_CLASSES } from "../../buttons/iconButton/iconButton.component";
import SpriteIcon from "../../icon/icon.component";
import TextButton, { TEXT_BUTTON_TYPE_CLASSES } from "../../buttons/textButton/textButton.component";

const PagesBody = () => {
	const navigate = useNavigate();

  return (
    <Container>
      <Header>
				<IconButton 
					buttonType={ICON_BUTTON_TYPE_CLASSES.base}
					onClick={() => navigate(-1)}
				>
					<SpriteIcon icon="arrow-left"/>
				</IconButton>
				<TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.base}>
					<BackLink to="/breeds">BREEDS</BackLink>
				</TextButton>
			</Header>
			<Body>
				<CatsDirectory />
			</Body>
    </Container>
  )
}

export default PagesBody;