import styled from "styled-components";

export const BurgerOverlay = styled.div`
	position: fixed;
  background: var(--light-grey-color);
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s, height 0.3s;
  display: flex;
  padding-top: 100px;
  justify-content: center;
  z-index: 15;

	@keyframes fadeInLeft {
		0% {
			opacity: 0;
			transform: translate3d(-25%, 0, 0);
		}
		100% {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	}
`;

BurgerOverlay.displayName = "BurgerOverlay";

export const CardsContainer = styled.div`
	width: 100%;
  margin: 0px 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
  }
`;
CardsContainer.displayName = "BurgerCardsContainer";


