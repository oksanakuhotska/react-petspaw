import styled from "styled-components";
import { Form } from "react-router-dom";

export const SearchContainer = styled.div`
	flex-grow: 1;
	flex-shrink: 0;
	flex-basis: auto;

	order: 3;

	@media (min-width: 699px) {
		order: 2;
	}
`;

SearchContainer.displayName = 'SearchContainer';

export const SearchForm = styled(Form)`
  min-width: 180px;
	max-height: 60px;
	background-color: var(--white-color);
	display: flex;
	align-items: center;
	border-radius: var(--border-radius-base);

	&:hover {
		outline: solid var(--secondary-color);
		color: var(--dark-color);
	}

	&:active {
		outline: solid var(--accent-color);
		color: var(--dark-color);
	}
`;

SearchForm.displayName = 'SearchForm';

export const SearchInput = styled.input`
  background-color: transparent;
	flex-grow: 1;
	border: none;
	outline: none;
	padding: 15px;
	font-size: 20px;
	line-height: 150%;
	color: var(--medium-grey-color);
`;

SearchInput.displayName = 'SearchInput';