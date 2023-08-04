import styled from "styled-components";

export const Container = styled.div`
	border: 2px solid var(--secondary-color);
  border-radius: var(--border-radius-base);

  margin: 0 20px;
  position: relative;
	padding-top: 30px;

	@media (min-width: 678px){
		padding-top: 45px;
	}
`;
Container.displayName = "BreedsDetailsContainer";

