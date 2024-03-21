import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	inset: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	padding: 30px 15px;
	visibility: hidden;
	transition: visibility var(--transition);

	&::before {
		content: "";
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.9);
		opacity: 0;
		transition: opacity  var(--transition);
	}
`;
Container.displayName = 'Popup container';




