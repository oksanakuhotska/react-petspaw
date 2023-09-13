import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.div`
	background-color: var(--white-color);
	border-radius: var(--border-radius-base);
	height: 100vh;
	width: 100%;

	/* overflow: hidden; */

	/* overflow: auto;
	-ms-overflow-style: none;
  scrollbar-width: none;

	&::-webkit-scrollbar {
		width: 0;
		height: 0;
		
	} */
`;

Container.displayName = 'PagesBody';

export const Body = styled.div`
	height: 95%;
	width: 100%;	
	overflow: auto;
	-ms-overflow-style: none;
  scrollbar-width: none;

	&::-webkit-scrollbar {
		width: 0;
		height: 0;
		
	}
`;
Body.displayName = 'GridBody';

export const Header = styled.div`
	display: flex;
	gap: 10px;
	padding: 20px 20px 0px 20px;
`;
Header.displayName = 'Header buttons';

export const BackLink = styled(NavLink)`
	text-decoration: none;
	color: inherit;
	font-family: inherit;

	svg {
		fill: var(--accent-color);
	}

	svg:hover {
		fill: var(--white-color);
	}
`;
