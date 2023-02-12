import styled from "styled-components";

export const ConversionPageWrapper = styled.div`
  padding: 16px;
`;

export const DropBox = styled.div`
  width: 100&;
  max-width: 600px;
  height: 400px;
  border-radius: 8px;
  border: 2px dashed ${({ theme }) => theme.color.bg_4};
  background-color: ${({ theme }) => theme.color.bg_3};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  display: none;
`;
