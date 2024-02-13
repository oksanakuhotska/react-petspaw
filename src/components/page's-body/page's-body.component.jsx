// PagesBody component

import TabHeader from "../tab-header/tab-header.component";
import BreedsCatsDirectory from "../breeds-cats-directory/breeds-cats-directory.component";

import {
	Container, 
	Body, 
} from "./page's-body.styles";

const PagesBody = () => {

  return (
    <Container>
      <TabHeader tabs="Breeds" />
      <Body>
        <BreedsCatsDirectory />
      </Body>
    </Container>
  );
};

export default PagesBody;
