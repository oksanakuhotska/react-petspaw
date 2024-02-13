import { useNavigate } from "react-router-dom";
import IconButton, { ICON_BUTTON_TYPE_CLASSES } from "../buttons/iconButton/iconButton.component";
import TextButton, { TEXT_BUTTON_TYPE_CLASSES } from "../buttons/textButton/textButton.component";
import SpriteIcon from "../icon/icon.component";
import { Container, BackLink } from "./tab-header.styles";

const TabHeader = ({ tabs, breed }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <IconButton
        buttonType={ICON_BUTTON_TYPE_CLASSES.base}
        onClick={() => navigate(-1)}
      >
        <SpriteIcon icon="arrow-left" />
      </IconButton>
      <TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.base}>
			<BackLink to={`/${tabs.toLowerCase()}`}>{tabs}</BackLink>
			</TextButton>
      {breed ? (
        <TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.breedsid}>{breed}</TextButton>
      ) : null}
    </Container>
  );
};

export default TabHeader;