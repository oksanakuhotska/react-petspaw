import styled from "styled-components";

export const Container = styled.div`

	display: grid;
	gap: 30px;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	height: 100%;
	width: 100%;
	justify-content: space-between;
	font-family: Jost, sans-serif;

	@media (min-width: 996px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
	}
`;
Container.displayName = 'AppContainer';

export const SideBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 0 1 100%;

	padding: 30px;

	@media (min-width: 1170px) {
		flex: 0 1 50%;
	}
`;
SideBar.displayName = 'AppSideBar';

export const Pages = styled.div`
  /* flex: 0 1 50%; */
`;

Pages.displayName = 'AppPages';