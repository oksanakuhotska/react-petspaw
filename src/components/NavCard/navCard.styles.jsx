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

export const BaseCardBody = styled.div`
  	@media (min-width: 768px) {
		height: 198px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 4px solid rgba(255, 255, 255, 0.6);
		border-radius: 20px;
		margin-bottom: 10px;

		&:hover {
			border: 4px solid #fff;
			/* transition: var(--transition); */
		}

		&:active {
			border: 4px solid #FBE0DC;
			/* transition: var(--transition); */
		}
	}
`
BaseCardBody.displayName = "BaseCardBody";

export const VotingCardBody = styled(BaseCardBody)`
  @media (min-width: 768px){
		background-color: #B4B7FF;
	}
`
VotingCardBody.displayName = "VotingCardBody";

export const BreedsCardBody = styled(BaseCardBody)`
  @media (min-width: 768px){
		background-color: #97EAB9;
	}
`
BreedsCardBody.displayName = "BreedsCardBody";

export const GalleryCardBody = styled(BaseCardBody)`
  @media (min-width: 768px){
		background-color: #FFD280;
	}
`
GalleryCardBody.displayName = "GalleryCardBody";


export const CardImage = styled.img`
  display: none;
	@media (min-width: 768px) {
		display: block;
	}
`
CardImage.displayName = "CardImage";