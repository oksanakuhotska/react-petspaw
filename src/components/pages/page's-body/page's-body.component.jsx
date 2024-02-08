// PagesBody component
import { useNavigate } from "react-router-dom";
import CatsDirectory from "../../cats-directory/cats-directory.component";
import IconButton, { ICON_BUTTON_TYPE_CLASSES } from "../../buttons/iconButton/iconButton.component";
import SpriteIcon from "../../icon/icon.component";
import TextButton, { TEXT_BUTTON_TYPE_CLASSES } from "../../buttons/textButton/textButton.component";
import SortTableBreeds from "../../sort-table-breeds/sort-table-breeds.component";

import {
	Container, 
	Body, 
	Header, 
	BackLink
} from "./page's-body.styles";

// const PagesBody = ({ breeds, selectedBreed, setSelectedBreed, sortOrder, setSortOrder, count, setCount, handleSortAZ, handleSortZA }) => {

const PagesBody = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <IconButton
          buttonType={ICON_BUTTON_TYPE_CLASSES.base}
          onClick={() => navigate(-1)}
        >
          <SpriteIcon icon="arrow-left" />
        </IconButton>
        <TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.base}>
          <BackLink to="/breeds">BREEDS</BackLink>
        </TextButton>
      </Header>
      <Body>
        <CatsDirectory />
      </Body>
    </Container>
  );
};

export default PagesBody;
