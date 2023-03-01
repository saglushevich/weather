import styled from "styled-components";

export const SearchInput = styled.input`
  width: 380px;
  height: 60px;
  padding: ${({ theme }) => `0 ${theme.gaps.m}`};
  background: linear-gradient(
    116.79deg,
    rgba(255, 255, 255, 0.48) -41.94%,
    rgba(255, 255, 255, 0.12) 57.51%
  );
  border-radius: ${({ theme }) => theme.borderSizes.l};
  border: none;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: #fff;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    height: 50px;
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
