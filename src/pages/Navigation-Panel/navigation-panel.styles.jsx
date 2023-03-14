import styled from "styled-components";

export const Container = styled.div`

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	gap: 30px;

	padding: 30px;
	height: 100%;
	width: 100%;
	justify-content: space-between;
	font-family: Jost, sans-serif;
`;
Container.displayName = 'AppContainer';

export const SideBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 0 1 100%;

	@media (min-width: 1170px) {
		flex: 0 1 50%;
	}
`;
SideBar.displayName = 'AppSideBar';

export const Pages = styled.div`
  /* flex: 0 1 50%; */
`;

Pages.displayName = 'AppPages';