import { useState } from "react";

import SpriteIcon from "../../components/icon/icon.component";

import { Container, SliderImage, LeftArrow, RightArrow, DotsNavigation, Dot } from "./slider.styles";

const Slider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<Container>
			<LeftArrow onClick={goToPrevious}>
				<SpriteIcon icon="arrow-left"/>
			</LeftArrow>
			<RightArrow onClick={goToNext}>
				<SpriteIcon icon="arrow-left"/>
			</RightArrow>
			<SliderImage 
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
			>
			</SliderImage>
			<DotsNavigation>
				{slides.map((slide, slideIndex) => (
					<Dot key={slideIndex} onClick={() => goToSlide(slideIndex)}>●</Dot>
				))}
			</DotsNavigation>
		</Container>
	)
}

export default Slider;

