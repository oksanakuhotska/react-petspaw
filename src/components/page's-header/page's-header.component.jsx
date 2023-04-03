import Burger from "../burger/burger.component";
import ReactionsHistory from "../reactions-history/reactions-history.component";
import Search from "../search/search.component";

const PagesHeader = () => {


  return (
    <>
      <Burger />
      <Search />
      <ReactionsHistory />
    </>
  )
}

export default PagesHeader;