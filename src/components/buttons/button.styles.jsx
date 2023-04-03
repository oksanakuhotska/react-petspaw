import styled from "styled-components";

export const BaseButton = styled.button`
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
BaseButton.displayName = 'BaseButton';

export const NavCardButton = styled(BaseButton)`
	height: 36px;
	min-width: 100%;
	font-size: 12px;
	line-height: 133.33%;
	background-color: var(--white-color);
`;
NavCardButton.displayName = 'NavCardButton';

export const IconButton = styled(BaseButton)`
	width: 40px;
	padding: 0px;
	fill: var(--accent-color);

	&:hover {
		fill: var(--white-color);
	}

	svg {
		width: 20px;
		height: 20px;
	}
`;
IconButton.displayName = 'IconButton';

export const IconButtonInverted = styled(IconButton)`
	background-color: var(--white-color);

	&:hover {
		fill: var(--white-color);
		background-color: var(--accent-color);
	}
`;
IconButton.displayName = 'IconButton';

//кнопка для грід-картинки
export const CardImgButton = styled(BaseButton)`
	width: 85%;
	height: 34px;
	background-color: var(--white-color);
	font-size: 16px;
	line-height: 150%;
	text-transform: none;
`;
CardImgButton.displayName = 'CardImgButton';

//кнопка реакцій history reactions
export const ReactionHistoryButton = styled(BaseButton)`
  width: 60px;
  height: 60px;
  background-color: var(--light-color);
  border-radius: var(--border-radius-base);
  fill: var(--accent-color);

	svg {
		width: 30px;
		height: 30px;

	}

	&:hover {
		background-color: var(--secondary-color);
	}

	&:active {
		background-color: var(--accent-color);
		fill: var(--light-color);
	}	
`

ReactionHistoryButton.displayName = 'ReactionHistoryButton';

export const UserReactionsButton = styled(ReactionHistoryButton)`
	fill: var(--white-color);

	@media (min-width: 768px) {
		width: 80px;
		height: 80px;
	}
`
UserReactionsButton.displayName = 'UserReactionsButton';