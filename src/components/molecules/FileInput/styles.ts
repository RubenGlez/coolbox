import styled from "styled-components";

export const ConversionPageWrapper = styled.div`
  padding: 16px;
`;

export const FileInputWrapper = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 8px;
  border: 2px dashed ${({ theme }) => theme.color.bg_4};
  background-color: ${({ theme }) => theme.color.bg_3};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FileInputHiddenInput = styled.input`
  display: none;
`;
