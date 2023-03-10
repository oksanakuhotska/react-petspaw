import styled from "styled-components";

export const Card = styled.div`
	width: 100%;
	// flex: 0 1 100%;

	@media (min-width: 768px) {
		flex: 0 1 138px;
		display: flex;
		flex-direction: column;
		align-items: center;
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