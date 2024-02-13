import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

`;

Container.displayName = 'MainHeader';

export const BackLink = styled(NavLink)`
	text-decoration: none;
	color: inherit;
	font-family: inherit;

	svg {
		fill: var(--accent-color);
	}

	svg:hover {
		fill: var(--white-color);
	}
`;

Container.displayName = 'LinkBackToPreviousPage';

export const Body = styled.div`
  background: var(--white-color);
	border-radius: var(--border-radius-base);
	height: 100%;
	width: 100%;
	padding-bottom: 20px;
`;

Body.displayName = 'BreedsSortedBody';

export const SliderContainer = styled.div`
	margin: 0 auto 50px;
  width: 93%;
  height: 40vh;
  padding: 0 20px;

	/* @media (min-width: 768px) {
		height: 40vh;
	}

	@media (min-width: 1120px) {
		height: 50vh;
	} */
`;

SliderContainer.displayName = 'ImageSliderContainer';

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 20px;
	margin: 20px 0;
	padding: 20px;
`;

ButtonsContainer.displayName = 'ButtonsContainer';