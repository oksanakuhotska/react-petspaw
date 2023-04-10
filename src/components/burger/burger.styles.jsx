import styled from "styled-components";

import { Link } from "react-router-dom";

export const BurgerContainer = styled.div`
	@media (min-width: 1170px) {
		display: none;
	}
`;
BurgerContainer.displayName = "BurgerContainer";

export const BurgerButton = styled(Link)`
	position: relative;
  z-index: 100;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
  border-radius: var(--border-radius-base);
  cursor: pointer;
`;
BurgerButton.displayName = "BurgerButton";

export const ButtonLine = styled.div`
	display: block;
  background-color: var(--accent-color);
  width: 30px;
  height: 2px;
  z-index: 100;
  position: absolute;
  background-color: var(--accent-color);
  top: 50%;
  left: 50%;
  margin: auto;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

	&:nth-child(1) {
		top: 19px;
	}

	&:nth-child(2) {
		top: 24px;
	}

	&:nth-child(3) {
		top: 34px;
	}
`;
ButtonLine.displayName = "ButtonLine";

