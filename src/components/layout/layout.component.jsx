import PagesBody from "../page's-body/page's-body.component";
import MainHeader from "../main-header/main-header.component";

import { Container } from "./layout.styles";

const PagesLayout = () => {

  return (
    <Container>
      <MainHeader />
      <PagesBody />
    </Container>
  )
}

export default PagesLayout;
