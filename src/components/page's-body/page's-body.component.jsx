// PagesBody component
import CatsDirectory from "../cats-directory/cats-directory.component";

import {
	Container, 
	Body, 
} from "./page's-body.styles";
import TabHeader from "../tab-header/tab-header.component";

// const PagesBody = ({ breeds, selectedBreed, setSelectedBreed, sortOrder, setSortOrder, count, setCount, handleSortAZ, handleSortZA }) => {

const PagesBody = () => {

  return (
    <Container>
      <TabHeader tabs="Breeds" />
      <Body>
        <CatsDirectory />
      </Body>
    </Container>
  );
};

export default PagesBody;
