import styled from "styled-components";

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 100%;

	@media (min-width: 768px) {
		min-width: 446px;
	}
`;
MainContainer.displayName = 'Side Bar Main Container';

export const BaseText = `
	font-size: 20px;
	line-height: 145%;
`;

export const Title = styled.h1`
	font-size: 44px;
	color: var(--dark-color);
	font-weight: 500;
	line-height: 131.82%;
	margin: 0;
	padding: 0 0 10px 0;
`;
Title.displayName = 'Side Bar Main Title';

export const SubTitle = styled.p`
	${BaseText}
	margin: 0;
	padding: 0 0 60px 0;
`;
SubTitle.displayName = 'Side Bar Main SubTitle';

export const Text = styled.p`
	${BaseText}
	margin: 0;
	color: var(--dark-color);
	padding: 0 0 20px 0;
`;
Text.displayName = 'Side Bar Main Text';