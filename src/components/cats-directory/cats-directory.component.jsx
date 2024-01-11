import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

import { getData, url } from "../../Utills/fetch-data/fetchData.utills";
import { TEXT_BUTTON_TYPE_CLASSES } from "../buttons/textButton/textButton.component";

import { DirectoryContainer, ImageContainer, CardImageOverlay, CardButtonWrapper, CardLink, CenteredButton} from "./cats-directory.styles";

	const CatsDirectory = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
  const fetchCats = async () => {
		const cats = await getData(url);
		setCats(cats);
	};

	fetchCats();

  }, [])

	console.log(cats);

	return (
		<DirectoryContainer>
			{cats.map((cat) => {
				// Додайте перевірку наявності breeds та breeds[0]
				if (cat.breeds && cat.breeds[0]) {
					return (
						<ImageContainer key={`${cat.breeds[0].name}-${cat.id}`}>
							<img src={cat.url} alt={cat.breeds[0].name} />
							<CardImageOverlay />
							<CardButtonWrapper>
								<CardLink to={`/breeds/${cat.breeds[0].id}`}>
									<CenteredButton buttonType={TEXT_BUTTON_TYPE_CLASSES.breedsname}>{cat.breeds[0].name}</CenteredButton>
								</CardLink>
							</CardButtonWrapper>
						</ImageContainer>
					);
				} else {
					// Якщо об'єкт не має breeds або breeds[0], можна обробити цю ситуацію або пропустити цей об'єкт
					console.warn('Немає breeds або breeds[0] у кота:', cat);
					return null; // пропустити цей об'єкт
				}
			})}
		</DirectoryContainer>
	);
	
}

export default CatsDirectory;