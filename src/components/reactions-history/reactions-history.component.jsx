import IconButton, { ICON_BUTTON_TYPE_CLASSES } from "../buttons/iconButton/iconButton.component";
import SpriteIcon from "../icon/icon.component";
import { Container, LinkToHistory } from "./reactions-history.styles";

const ReactionsHistory = () => {


  return (
    <Container>
      <IconButton buttonType={ICON_BUTTON_TYPE_CLASSES.reactionhistory}>
        <LinkToHistory to="/favourites"><SpriteIcon icon="smile-happy"/></LinkToHistory>
      </IconButton>
      <IconButton buttonType={ICON_BUTTON_TYPE_CLASSES.reactionhistory}>
        <LinkToHistory to="/likes"><SpriteIcon icon="smile-like"/></LinkToHistory>
      </IconButton>
      <IconButton buttonType={ICON_BUTTON_TYPE_CLASSES.reactionhistory}>
        <LinkToHistory to="/dislikes"><SpriteIcon icon="smile-dislike"/></LinkToHistory>
      </IconButton>
      
    </Container>
  )
}

export default ReactionsHistory;