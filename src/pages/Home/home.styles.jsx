import styled from "styled-components";

// export const HomeContainer = styled``;
// HomeContainer.displayName = 'HomeContainer';

export const Overlay = styled.div`
	background-color: var(--secondary-color);
	border-radius: var(--border-radius-base);
	margin: 30px;
	width: 45%;
	height: 90vh;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 0;
`;
Overlay.displayName = 'HomeOverlay';

export const HomeImage = styled.img`
	display: block;
	width: 50%;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;
`;
HomeImage.displayName = 'HomeImage';