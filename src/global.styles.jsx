import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Jost:regular,500&display=swap'); */

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
		--transition: all 0.15s ease 0s;
		--transition-lazy: all 0.8s else 0s;
		--font-family: 'Jost', sans-serif;
}

	html {
		box-sizing: border-box;
		scroll-behavior: smooth;
		margin: 0;
	}

	body {
		min-width: 320px;
		overflow: auto;
		font-size: 16px;
		font-family: var(--font-family);

		color: var(--dark-color);
		background-color: var(--light-grey-color);

		font-weight: 400;
		line-height: 150%;
		font-style: normal;
		margin: 0;

		transition: var(--transition);
	}
`;


