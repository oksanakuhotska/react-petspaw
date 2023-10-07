import Burger from "../../burger/burger.component";
import ReactionsHistory from "../../reactions-history/reactions-history.component";
import Search from "../../search/search.component";
import { Container } from "./page's-header.styles";

const PagesHeader = ({ onChangeHandler }) => {

  return (
    <Container>
      <Burger />
      <Search {...onChangeHandler} />
      <ReactionsHistory />
    </Container>
  )
}

export default PagesHeader;