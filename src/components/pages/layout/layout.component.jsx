import { useEffect, useState } from "react";

import PagesBody from "../page's-body/page's-body.component";
import PagesHeader from "../page's-header/page's-header.component";

import { getData, url } from "../../../Utills/fetch-data/fetchData.utills";

import { Container } from "./layout.styles";

const PagesLayout = () => {

	const [searchField, setSearchField] = useState('');
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilterCats] = useState(cats);

  useEffect(() => {

		const fetchCats = async () => {
			const cats = await getData(url);
			setCats(cats);
		};

		fetchCats();
  }, []);

  useEffect(() => {
    const newFilteredCats = cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterCats(newFilteredCats);
  }, [cats, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };



  return (
    <Container>
      <PagesHeader onChangeHandler={onSearchChange} />
      <PagesBody cats={filteredCats} />
    </Container>
  )
}

export default PagesLayout;