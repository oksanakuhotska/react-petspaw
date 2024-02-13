// BreedsSorted.component.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../../components/main-header/main-header.component";
import TabHeader from "../../components/tab-header/tab-header.component";
import Slider from "../../components/slider/slider.component";
import BreedsDetails from "../../components/breed-details/breed-details.component";
import { Body, Container, SliderContainer } from "./breeds-sorted.styles";

const BreedsSorted = () => {
  const [cat, setCat] = useState([]);
  const { breeds } = useParams();

  const catUrl = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breeds}`;

  const getData = async (catUrl) => {
    try {
      const response = await fetch(catUrl, { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching cat data:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const catData = await getData(catUrl);
        setCat(catData);
      } catch (error) {
        console.error("Error fetching cat data:", error);
      }
    };
    fetchCat();
  }, [catUrl]);

  const slides = cat.map((catItem) => ({ url: catItem.url, title: catItem.id }));

  return (
    <Container>
      <MainHeader />
      <Body>
        <TabHeader tabs="Breeds" breed={breeds} />
        <SliderContainer>
          {cat.length > 0 && <Slider slides={slides} />}
        </SliderContainer>
        <BreedsDetails />
      </Body>
    </Container>
  );
};

export default BreedsSorted;






// import { useEffect, useState } from "react";
// import { useParams, NavLink, useNavigate, Link } from "react-router-dom";

// import IconButton, { ICON_BUTTON_TYPE_CLASSES } from "../../components/buttons/iconButton/iconButton.component";
// import TextButton, { TEXT_BUTTON_TYPE_CLASSES } from "../../components/buttons/textButton/textButton.component";
// import Slider from "../../components/slider/slider.component";
// import BreedsDetails from "../../components/breed-details/breed-details.component";
// import SpriteIcon from "../../components/icon/icon.component";
// import MainHeader from "../../components/main-header/main-header.component";

// import { Body, ButtonsContainer, Container, SliderContainer, BackLink } from "./breeds-sorted.styles";
// import TabHeader from "../../components/tab-header/tab-header.component";

// const BreedsSorted = () => {
// 	const [cat, setCat] = useState([]);
// 	const { breeds } = useParams();
// 	const navigate = useNavigate();

// 	const catUrl = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breeds}`;

// 	const getData = async (catUrl) => {
//     try {
//       const response = await fetch(catUrl, { method: "GET" });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       return await response.json();
//     } catch (error) {
//       console.error("Error fetching cat data:", error);
//       return [];
//     }
//   };

// 	useEffect(() => {
//     const fetchCat = async () => {
//       try {
//         const catData = await getData(catUrl);
//         setCat(catData);
//       } catch (error) {
//         console.error("Error fetching cat data:", error);
//       }
//     };

//     fetchCat();
//   }, [catUrl]);
	
// 		const slides = cat.length > 0 ? [
// 			{url: `${cat[0].url}`, title: `${cat[0].id}`},
// 			{url: `${cat[1].url}`, title: `${cat[1].id}`},
// 			{url: `${cat[2].url}`, title: `${cat[2].id}` },
// 			{url: `${cat[3].url}`, title: `${cat[3].id}` },
// 			{url: `${cat[4].url}`, title: `${cat[4].id}`},
// 		] : [];

	
// 	return (
// 		<Container>
// 			<MainHeader />
// 			<Body>
// 				{/* <ButtonsContainer>
// 					<IconButton 
// 						buttonType={ICON_BUTTON_TYPE_CLASSES.base}
// 						onClick={() => navigate(-1)}
// 					>
// 						<SpriteIcon icon="arrow-left"/>
// 					</IconButton>
// 					<TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.base}>
// 						<BackLink to="/breeds">BREEDS</BackLink>
// 					</TextButton>
// 					<TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.breedsid}>{breeds}</TextButton>
// 				</ButtonsContainer> */}
// 				<TabHeader
// 					tabs="Breeds"
// 					breedsId={breedsId}
// 				breed={breed}
// 				/>
// 				<SliderContainer>
// 					{cat.length > 0 && (
// 						<Slider slides={slides}/>
// 					)}
// 				</SliderContainer>
// 				<BreedsDetails/>
// 			</Body>
//     </Container>
// 	);
// };

// export default BreedsSorted;

