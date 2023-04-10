import styled from "styled-components";

// кнопка для стрілки, пошуку
export const BaseIconButton = styled.button`
	width: 40px;
	height: 40px;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 0px;

	background-color: var(--secondary-color);
	fill: var(--accent-color);

	border: none;
	border-radius: var(--border-radius-secondary);
	cursor: pointer;

	svg {
		width: 20px;
		height: 20px;
	}

	&:hover {
		transition: var(--transition);
		background-color: var(--accent-color);
		fill: var(--white-color);
	}

	&:active {
		transition: var(--transition);
	}
`;
BaseIconButton.displayName = 'BaseIconButton';

// кнопка для серця, закрити
export const IconButtonInverted = styled(BaseIconButton)`
	background-color: var(--white-color);
`;
IconButtonInverted.displayName = 'IconButton';

//кнопка реакцій history reactions
export const ReactionHistoryButton = styled(BaseIconButton)`
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
`;
ReactionHistoryButton.displayName = 'ReactionHistoryButton';

export const UserReactionsButton = styled(ReactionHistoryButton)`
	fill: var(--white-color);

	@media (min-width: 768px) {
		width: 80px;
		height: 80px;
	}
`;
UserReactionsButton.displayName = 'UserReactionsButton';