import { useEffect, useState } from "react";
import Burger from "../burger/burger.component";
import ReactionsHistory from "../reactions-history/reactions-history.component";
import Search from "../search/search.component";
import { Container } from "./main-header.styles";
import { getData, url } from "../../Utills/fetch-data/fetchData.utills";


const MainHeader = () => {

  const [searchField, setSearchField] = useState("");
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState(cats);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const catsData = await getData(url);
        setCats(catsData);
      } catch (error) {
        console.error("Error fetching cats data:", error);
      }
    };

    fetchCats();
  }, []);

	useEffect(() => {
		// Логуємо ім'я кожного кота перед фільтрацією
		cats.forEach((cat) => console.log(cat.breeds[0]?.name));
		
		const newFilteredCats = cats.filter(
			(cat) => cat.breeds[0]?.name.toLowerCase().includes((searchField ?? '').toLowerCase())
		);
	
		setFilteredCats(newFilteredCats);
	}, [cats, searchField]);

  const onSearchChange = (newSearchTerm) => {
    setSearchField(newSearchTerm);
  };
	
  console.log(filteredCats);
  
  return (
    <Container>
      <Burger />
      <Search onSearchChange={onSearchChange} />
      <ReactionsHistory />
    </Container>
  )
}

export default MainHeader;