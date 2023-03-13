import styled from "styled-components";

import  { BaseCardBody } from '../nav-card-body/nav-card-body.styles';

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
	font-family: inherit;
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
	
	&:hover {
		background-color: var(--secondary-color);
		color: var(--accent-color);
	}

	&:active {
		color: var(--white-color);
		background-color: var(--accent-color);
	}

	&:hover {
		& + ${BaseCardBody} {
		border: 4px solid var(--white-color);
		transition: var(--transition);
	}
	}

	&:active {
		& + ${BaseCardBody} {
			border: 4px solid var(--secondary-color);
			transition: var(--transition);
		}
	}
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

export const CardImgButton = styled(BaseButton)`
	width: 85%;
	height: 34px;
	background-color: var(--white-color);
	font-size: 16px;
	line-height: 150%;
	text-transform: none;
`;
CardImgButton.displayName = 'CardImgButton';