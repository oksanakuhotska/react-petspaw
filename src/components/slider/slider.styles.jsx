import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	position: relative;
`;
Container.displayName = 'SliderContainer';

export const SliderImage = styled.div`
	width: 100%;
	height: 100%;
	border-radius: var(--border-radius-base);
	background-position: center;
	background-size: cover;
`;
SliderImage.displayName = 'SliderImage';

export const LeftArrow = styled.div`
	position: absolute;
	top: 50%;
	left: 32px;
	transform: translate(0, -50%);
	font-size: 50px;
	color: var(--accent-color);
	z-index: 1;
	cursor: pointer;
	fill: var(--accent-color);

	&:hover {
		transform: scale(1.2);
	}
`;
LeftArrow.displayName = 'LeftArrow';

export const RightArrow = styled.div`
	position: absolute;
	top: 50%;
	right: 32px;
	transform: translate(0, -50%);
	font-size: 50px;
	color: var(--accent-color);
	z-index: 1;
	cursor: pointer;
	fill: var(--accent-color);

	&:hover {
		transform: scale(1.2);
	}
`;
RightArrow.displayName = 'RightArrow';

export const DotsNavigation = styled.div`
	display: flex;
	justify-content: center;
	padding: 7px;
	background-color: var(--white-color);
	border-radius: 20px;
	width: 90px;
	position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
`;
DotsNavigation.displayName = 'DotsNavigation';

export const Dot = styled.div`
	margin: 0 3px;
	cursor: pointer;
	font-size: 20px;
	color: var(--secondary-color);
	
	&:hover {
		color: var(--accent-color);
	}
	&:active {
		color: var(--accent-color);
	}
`;
Dot.displayName = 'OneDot';