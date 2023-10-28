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

export const Title = styled.h3`
	padding: 0 20px;

  font-weight: 500;
  font-size: 30px;
  line-height: 144%;
  text-align: center;
  background: var(--white-color);

	display: inline;
	max-width: 200px;
  position: absolute;
	top: -25px;
  left: 0;
  right: 0;
  margin: 0 auto;

	@media (min-width: 678px){
		max-width: 300px;
		font-size: 36px;
	}
`;
Title.displayName = "BreedsDetailsTitle";

export const SubTitle = styled.p`
	padding: 0 20px;
  margin: 0 0 20px 0;

	font-size: 14px;
  font-weight: 500;
  line-height: 144%;
  color: var(--medium-grey-color);
  text-align: center;

	@media (min-width: 678px){
		font-size: 16px;
	}
`;
SubTitle.displayName = "BreedsDetailsSubTitle";

export const Content = styled.div`
	display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto 1fr;
	margin-bottom: 20px;

	@media (min-width: 678px){
	display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
	}
`;
Content.displayName = "BreedsDetailsContent";

export const Column = styled.div`
	padding: 0 20px;
`;
Column.displayName = "BreedsDetailsColumn";

export const Text = styled.p`
	font-weight: 500;
  padding: 0;
  margin: 0;
	padding-bottom: 10px;

	@media (min-width: 678px){
		padding-bottom: 0px;
		margin-top: 10px;
	}	
`;
Text.displayName = "BreedsDetailsText";

export const SubText = styled.span`
	color: var(--medium-grey-color);
	font-weight: 400;
`;
SubText.displayName = "BreedsDetailsSubText";