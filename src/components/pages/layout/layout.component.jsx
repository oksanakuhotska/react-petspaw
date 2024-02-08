import PagesBody from "../page's-body/page's-body.component";
import PagesHeader from "../page's-header/page's-header.component";

import { Container } from "./layout.styles";

const PagesLayout = () => {

  return (
    <Container>
      <PagesHeader />
      <PagesBody />
    </Container>
  )
}

export default PagesLayout;
