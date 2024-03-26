import styled from "styled-components";
import IconButton from "../buttons/iconButton/iconButton.component";


export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

ModalWrapper.displayName = 'Modal Wrapper';

export const ModalContent = styled.div`
	position: relative;
	padding: 20px;
	background-color: var(--light-grey-color);
	border-radius: var(--border-radius-base);
  color: var(--medium-grey-color);
	font-size: 20px;
	line-height: 150%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 680px;
	height: 75vh; 
`;

ModalContent.displayName = 'Modal Content';

export const Title = styled.h1`
	font-size: 36px;
	color: var(--dark-color);
	line-height: 144.44%;
	font-weight: 500;
	margin: 0px 0px 10px 0px;
`;

Title.displayName = 'Modal title';

export const Subtitle = styled.div`
	color: var(--medium-grey-color);
	font-size: 20px;
	line-height: 150%;
	margin-bottom: 40px;

	a {
		font-size: inherit;
		color: var(--accent-color);
		text-decoration: none;
		cursor: pointer;
	}
`
Subtitle.displayName = 'Modal subtitle';

export const CloseButton = styled(IconButton)`
	position: absolute;
	top: 20px;
	right: 20px;

	width: 40px;
	height: 40px;
	justify-content: center;
	border-radius: var(--border-radius-secondary);
	background-color: var(--white-color);
	fill: var(--accent-color);

	svg {
		width: 17px;
		height: 17px;
	}

	&:hover {
		fill: var(--white-color);
		background-color: var(--accent-color);
		transition: var(--transition);
	}`;

CloseButton.displayName = 'Modal close button';


