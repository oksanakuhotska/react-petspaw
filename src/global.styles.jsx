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

	:root {
	--accent-color: #FF868E;
	--secondary-color: #FBE0DC;
	--success-color: #97EAB9;
	--warning-color: #FFD280;
	--info-color: #B4B7FF;
	--light-color: #ffffff;
	--dark-color: #1D1D1D;
	--medium-grey-color: #8C8C8C;
	--light-grey-color: #F8F8F7;
	--white-color: #ffffff;

	--border-radius-base: 20px;
	--border-radius-secondary: 10px;
	--transition: all 0.3s ease 0s;
	--transition-lazy: all 0.8s else 0s;
}
`;


