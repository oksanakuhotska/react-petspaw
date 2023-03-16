import styled from "styled-components";

export const Container = styled.div`
  display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 20px;
	
	min-width: 100%;
	
	@media (min-width: 768px) {
		flex-direction: row;
		min-width: 446px;
	}
`;

Container.displayName = "NavCardsContainer";
