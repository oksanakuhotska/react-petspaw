import styled from "styled-components";

export const Container = styled.div`
  display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 20px;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

Container.displayName = "NavCardsContainer";
