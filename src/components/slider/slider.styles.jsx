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