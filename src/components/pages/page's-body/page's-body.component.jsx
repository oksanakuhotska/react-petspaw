import CatsDirectory from "../../cats-directory/cats-directory.component";

import { Container, Body } from "./page's-body.styles";

const PagesBody = () => {

  return (
    <Container>
      <div>HEADER</div>
			<Body>
				<CatsDirectory />
			</Body>
    </Container>
  )
}

export default PagesBody;