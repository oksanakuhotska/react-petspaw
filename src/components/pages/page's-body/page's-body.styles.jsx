import styled from "styled-components";

export const Container = styled.div`
	background-color: var(--white-color);
	border-radius: var(--border-radius-base);
	height: 100vh;
	width: 100%;

	/* overflow: hidden; */

	overflow: auto;
	-ms-overflow-style: none;
  scrollbar-width: none;

	&::-webkit-scrollbar {
		width: 0;
		height: 0;
		
	}
`;

Container.displayName = 'PagesBody';

export const Body = styled.div`

`;
Body.displayName = 'PagesGridBody';
