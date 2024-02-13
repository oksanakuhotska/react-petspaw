import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
	background-color: var(--accent-color);
`;

export const DropdownWrapper = styled.div`
  position: relative;
  margin-right: 10px;
`;

export const DropdownButton = styled.button`
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SortButton = styled.button`
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
`;


