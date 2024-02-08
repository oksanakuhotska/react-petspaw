import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;


Container.displayName = "ReactionsHistoryContainer";

export const LinkToHistory = styled(NavLink)`
  fill: inherit;
`;

Container.displayName = "LinkToHistory";
