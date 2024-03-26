import styled from "styled-components";

export const BaseTextButton = styled.button`
	min-width: 143px;
	width: auto;
	height: 40px;

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0px 10px;

	background-color: var(--secondary-color);
	color: var(--accent-color);
	font-size: 20px;
	letter-spacing: 2px;
	text-decoration: none;
	font-family: var(--font-family);
	text-transform: uppercase;
	font-weight: 500;
	border: none;
	border-radius: var(--border-radius-secondary);
	cursor: pointer;

	&:hover {
		transition: var(--transition);
		background-color: var(--accent-color);
		color: var(--white-color);
	}

	&:active {
		transition: var(--transition);
	}
`;
BaseTextButton.displayName = 'Base Text Button';

export const NavCardButton = styled(BaseTextButton)`
	height: 36px;
	min-width: 100%;
	font-size: 12px;
	line-height: 133.33%;
	background-color: var(--white-color);
`;
NavCardButton.displayName = 'Nav Card Button';

//кнопка в грід-картинки BreedsNameButton
export const BreedsNameButton = styled(BaseTextButton)`
	width: 85%;
	min-height: 34px;
	background-color: var(--white-color);
	font-size: 16px;
	font-weight: 400;
	line-height: 150%;
	text-transform: none;
	padding: 0px 10px;
	text-decoration: none;

	&:hover {
		background-color: var(--white-color);
		color: var(--accent-color);
	}
`;
BreedsNameButton.displayName = 'Breeds Name Button';

export const BreedsId = styled(BaseTextButton)`
	height: 40px;
	min-width: 90px;
	font-size: 20px;
	line-height: 133.33%;
	background-color: var(--accent-color);
	color: var(--white-color);
	padding: 0px 20px;
`;
BreedsId.displayName = 'Breeds Id Button';

export const UploadPhotoButton = styled(BaseTextButton)`
	height: 40px;
	min-width: 172px;
	font-size: 20px;
	line-height: 133.33%;
	background-color: var(--accent-color);
	color: var(--white-color);
	padding: 0px 20px;
	font-size: 12px;

	&:hover {
		background-color: var(--secondary-color);
		color: var(--accent-color);
	}
`;
UploadPhotoButton.displayName = 'Upload Photo Button';

