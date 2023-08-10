import { Link } from "react-router-dom";
import styled from "styled-components";

import TextButton from "../buttons/textButton/textButton.component";

export const DirectoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-auto-rows: 90%;
  gap: 20px;
	grid-auto-flow: dense;
	padding: 20px;
	
	/* overflow-y: scroll;
	height: 100%;
	width: 96%;
	padding-right: 45px; */

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 70%;
		gap: 20px;
		grid-auto-flow: dense;
	}
`;
DirectoryContainer.displayName = "CatsDirectoryContainer";

export const CardImageOverlay = styled.div`
	position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
	border-radius: var(--border-radius-base);
`;

CardImageOverlay.displayName = "CardImageOverlay";

export const CardButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 20px;
  text-align: center;
  opacity: 0;
  transition: opacity .35s ease;
	z-index: 10;
	text-align: center;

	display: flex;
	align-items: center;
	justify-content: center;
`;

CardButtonWrapper.displayName = "CardButtonWrapper";

export const CenteredButton = styled(TextButton)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;


export const ImageContainer = styled.div`
	overflow: hidden;
  position: relative;
	border-radius: var(--border-radius-base);

	img {
		display: block;
		position: absolute;
		left: -1000%;
		right: -1000%;
		top: -1000%;
		bottom: -1000%;
		margin: auto;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	@media (min-width: 768px) {

		&:nth-of-type(10n+1) {
			grid-row: span 2;
		}

		&:nth-of-type(10n+4) {
			grid-column: span 2;
			grid-row: span 2;
		}
		
		&:nth-of-type(10n+8) {
			grid-row: span 2;
		}
		
		&:nth-of-type(10n+9) {
			grid-column: span 2;
			grid-row: span 2;
		}
	}

	&:hover {
		${CardImageOverlay} {
			display: block;
			transition: var(--transition);
			background: var(--accent-color);
			opacity: 0.6;
		}

		img{
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		${CardButtonWrapper} {
			opacity: 1;
			z-index: 10;
		}
	}
`;
ImageContainer.displayName = "CatsImageContainer";

export const CardLink = styled(Link)`
	width: 100%;
	display: inline-block;

	text-decoration: none;

	&:hover {
		text-decoration: none;
	}

`



