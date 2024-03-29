import styled, { css } from "styled-components";

export const Container = styled.div`
	display: grid;
	gap: 30px;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	height: 100%;
	width: 100%;
	justify-content: space-between;
	font-family: Jost, sans-serif;

	@media (min-width: 1120px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
	}
`;
Container.displayName = 'AppContainer';

export const SideBar = styled.div`
	position: sticky;
  top: 30px;
	height: auto;

	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 0 1 100%;
	padding: 30px;
	display: ${(props) => (props.showPages ? "none" : "flex")};

	@media (min-width: 1120px) {
		display: flex;
		flex: 0 1 50%;
		justify-content: flex-start;
		padding: 30px 0px 30px 30px;
	}
`;
SideBar.displayName = 'AppSideBar';

export const Pages = styled.div`
  /* flex: 0 1 50%; */
	/* display: none; */
	padding: 30px;
	height: 100%;

	@media (max-width: 1120px) {
    display: ${(props) => (props.showPages ? "block" : "none")};
    flex: 0 1 100%;
    overflow: hidden;
  }

	@media (min-width: 1120px) {
		/* display: block; */
		/* padding: 30px 30px 30px 0px; */
	}
`;
Pages.displayName = 'AppPages';