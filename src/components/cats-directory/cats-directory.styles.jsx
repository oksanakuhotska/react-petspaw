import styled from "styled-components";

export const DirectoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-auto-rows: 90%;
  gap: 20px;
	grid-auto-flow: dense;

	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 70%;
		gap: 20px;
		grid-auto-flow: dense;
	}
`;
DirectoryContainer.displayName = "CatsDirectoryContainer";

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
`;
ImageContainer.displayName = "CatsImageContainer";