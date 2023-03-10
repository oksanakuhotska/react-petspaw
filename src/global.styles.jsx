import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		scroll-behavior: smooth;
		margin: 0;
	}

	body {
		min-width: 320px;
		overflow: auto;
		font-size: 16px;

		color: var(--dark-color);
		background-color: var(--light-grey-color);

		font-weight: 400;
		line-height: 150%;
		font-style: normal;
		font-family: Jost;
		margin: 0;

		transition: var(--transition);
	}
`;


