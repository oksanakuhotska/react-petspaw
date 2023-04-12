import CatsDirectory from "../../cats-directory/cats-directory.component";

import { Container } from "./page's-body.styles";

const PagesBody = () => {

  return (
    <Container>
      <div>HEADER</div>
			<CatsDirectory />
    </Container>
  )
}

export default PagesBody;