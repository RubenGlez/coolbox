import styled from "styled-components";

export const TabsWrapper = styled.div`
  height: 40px;
  position: relative;
`;

export const TabsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
  column-gap: 32px;
  list-style-type: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.bg_4};
`;

export const TabsListItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const TabsListItemIndicator = styled.div<{
  leftPos: number;
  width: number;
}>`
  position: absolute;
  bottom: 0;
  left: ${({ leftPos }) => leftPos}px;
  width: ${({ width }) => width}px;
  height: 2px;
  background-color: ${({ theme }) => theme.color.text_active};
  transition: ease-in-out 0.3s;
`;
