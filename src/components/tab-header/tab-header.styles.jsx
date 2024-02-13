import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 10px;
`

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
