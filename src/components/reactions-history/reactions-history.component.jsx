import IconButton, { ICON_BUTTON_TYPE_CLASSES } from "../buttons/iconButton/iconButton.component";
import SpriteIcon from "../icon/icon.component";
import { Container } from "./reactions-history.styles";

const ReactionsHistory = () => {


  return (
    <Container>
      <IconButton buttonType={ICON_BUTTON_TYPE_CLASSES.reactionhistory}>
        <SpriteIcon icon="smile-happy"/>
      </IconButton>
      <IconButton buttonType={ICON_BUTTON_TYPE_CLASSES.reactionhistory}>
        <SpriteIcon icon="smile-like"/>
      </IconButton>
      <IconButton buttonType={ICON_BUTTON_TYPE_CLASSES.reactionhistory}>
        <SpriteIcon icon="smile-sad"/>
      </IconButton>
      
    </Container>
  )
}

export default ReactionsHistory;