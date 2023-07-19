import { useState } from "react";

import { Container, SliderImage, LeftArrow, RightArrow } from "./slider.styles";


const Slider = ({slides}) => {
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
	}

	return (
		<Container>
			<LeftArrow onClick={goToPrevious}>❰</LeftArrow>
			<RightArrow onClick={goToNext}>❱</RightArrow>
			<SliderImage 
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				>
			</SliderImage>
		</Container>
	)
}

export default Slider;