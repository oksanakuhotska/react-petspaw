import styled from "styled-components";

export const Container = styled.div`

	background-color: var(--light-grey-color);
	border-radius: var(--border-radius-secondary);
	
	display: flex;
	align-items: center;
	gap: 20px;
	height: 60px;
	padding: 0px 15px;

`;
Container.displayName = "ActionLogsContainer";

export const Time = styled.div`

	width: 30px;
	border-radius: var(--border-radius-secondary);
	background-color: var(--white-color);
	display: flex;
	align-items: center;
	justify-content: center;

`;
Time.displayName = "ActionLogsTime";

export const Text = styled.div`
	color: var(--medium-grey-color);
	padding-right: 5px;
	flex-grow: 1;
`;
Text.displayName = "ActionLogsText";

export const TextId = styled.span`
  color: var(--dark-color);
  font-weight: 500;
`;
TextId.displayName = "ActionLogsTextId";

export const ActionsLogIcon = styled.div`
	padding: 0px 5px;
`;
TextId.displayName = "ActionsLogIcon";
