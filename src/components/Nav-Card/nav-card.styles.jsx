import styled from "styled-components";

import { BaseCardBody } from '../nav-card-body/nav-card-body.styles';
import { NavCardButton } from "../button/button.styles";

export const Card = styled.div`
	width: 100%;
	// flex: 0 1 100%;

	@media (min-width: 768px) {
		flex: 0 1 138px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	
	&:hover {
		${NavCardButton} {
			background-color: var(--secondary-color);
			color: var(--accent-color);
			transition: var(--transition);
		}

		${BaseCardBody} {
			border: 4px solid var(--white-color);
			transition: var(--transition);
	}
}

	&:active {
		${NavCardButton} {
			color: var(--white-color);
			background-color: var(--accent-color);
			transition: var(--transition);
		}
		
		${BaseCardBody} {
			border: 4px solid var(--secondary-color);
			transition: var(--transition);
		}
	}
`;
Card.displayName = "CardContainer";

export const CardImage = styled.img`
  display: none;

	@media (min-width: 768px) {
		display: block;
	}
`;
CardImage.displayName = "CardImage";