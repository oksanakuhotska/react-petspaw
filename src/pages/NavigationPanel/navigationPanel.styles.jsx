import styled from "styled-components";

export const NavWrapper = styled.div`
	
`;

export const Container = styled.div`
    gap: 30px;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
  
`;
Container.displayName = 'AppContainer';

export const SideBar = styled.div`
	flex: 0 1 50%;
`;
SideBar.displayName = 'AppSideBar';

export const Pages = styled.div`
  flex: 0 1 50%;
`;

Pages.displayName = 'AppPages';