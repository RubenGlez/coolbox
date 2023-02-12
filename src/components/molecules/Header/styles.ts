import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 64px;
  background-color: ${({ theme }) => theme.color.bg_1};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;
