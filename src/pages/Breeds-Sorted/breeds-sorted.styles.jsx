import styled from "styled-components";

export const Container = styled.div`

`;

Container.displayName = 'PagesHeader';

export const Body = styled.div`
  background: var(--white-color);
	border-radius: var(--border-radius-base);
	height: 100vh;
	width: 100%;
`;

Body.displayName = 'BreedsSortedBody';

export const SliderContainer = styled.div`
	margin: 0 auto 50px;
	width: 640px;
	height: 360px;
`;

SliderContainer.displayName = 'ImageSliderContainer';

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 20px;
	margin: 20px 0;
	padding: 20px;
`;

ButtonsContainer.displayName = 'ButtonsContainer';