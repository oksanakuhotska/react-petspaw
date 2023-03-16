import styled from "styled-components";

export const BaseCardBody = styled.div`
  @media (min-width: 768px) {
		height: 198px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 4px solid rgba(255, 255, 255, 0.6);
		border-radius: var(--border-radius-secondary);
		margin-bottom: 10px;
	}
`;
BaseCardBody.displayName = "BaseCardBody";

export const VotingCardBody = styled(BaseCardBody)`
  @media (min-width: 768px) {
		background-color: var(--info-color);
	}
`;
VotingCardBody.displayName = "VotingCardBody";

export const BreedsCardBody = styled(BaseCardBody)`
  @media (min-width: 768px) {
		background-color: var(--success-color);
	}
`;
BreedsCardBody.displayName = "BreedsCardBody";

export const GalleryCardBody = styled(BaseCardBody)`
  @media (min-width: 768px) {
		background-color: var(--warning-color);
	}
`;
GalleryCardBody.displayName = "GalleryCardBody";