import styled from "styled-components";

import TextButton from "../buttons/textButton/textButton.component";

export const Container = styled.div`
	height: 320px;
	width: 100%;
	border-radius: var(--border-radius-base);
	outline: 2px dashed var(--secondary-color);
	background-color: var(--white-color);

	// background-size: cover;

	background-repeat: no-repeat;
	background-position: center;
	background-size: 40% auto;

	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
Container.displayName = 'Upload container';

// upload code styles

export const UploadContainer = styled.div`
  height: 320px;
  width: 100%;
  border-radius: var(--border-radius-base);
  outline: 2px dashed var(--secondary-color);
  background-color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UploadInput = styled.input`
  display: none;
	text-align: center;
`;

export const UploadLabel = styled.label`
  cursor: pointer;
	text-align: center;
`;

export const UploadButton = styled(TextButton)`
  margin-top: 10px;
	text-align: center;
`;

export const UploadedImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: var(--border-radius-base);
	text-align: center;
`;

export const UploadMessage = styled.div`
	text-align: center;
`;