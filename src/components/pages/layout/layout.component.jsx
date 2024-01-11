import { useEffect, useState } from "react";

import PagesBody from "../page's-body/page's-body.component";
import PagesHeader from "../page's-header/page's-header.component";

import { getData, url } from "../../../Utills/fetch-data/fetchData.utills";

import { Container } from "./layout.styles";
import Search from "../../search/search.component";

const PagesLayout = () => {

	const [searchField, setSearchField] = useState("");
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilterCats] = useState(cats);

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
  (cat) => cat.breeds[0]?.name.toLowerCase().includes(searchField?.toLowerCase())
);
	
		setFilterCats(newFilteredCats);
	}, [cats, searchField]);

  const onSearchChange = (newSearchTerm) => {
    setSearchField(newSearchTerm);
  };
	
	console.log(filteredCats);
	

  return (
    <Container>
      <Search onSearchChange={onSearchChange} />
      <PagesBody cats={filteredCats || cats} />
    </Container>
  )
}

export default PagesLayout;