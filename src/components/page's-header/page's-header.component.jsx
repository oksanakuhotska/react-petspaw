import Burger from "../burger/burger.component";
import ReactionsHistory from "../reactions-history/reactions-history.component";
import Search from "../search/search.component";
import { Container } from "./page's-header.styles";

const PagesHeader = () => {

  return (
    <Container>
      <Burger />
      <Search />
      <ReactionsHistory />
    </Container>
  )
}

export default PagesHeader;