import styled from "styled-components";

export const SearchInput = styled.input`
  width: 380px;
  height: 60px;
  padding: ${({ theme }) => `0 ${theme.gaps.m}`};
  background: linear-gradient(116.79deg, #ffffff7a -41.94%, #ffffff1f 57.51%);
  border-radius: ${({ theme }) => theme.borderSizes.l};
  border: none;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
    height: 50px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    height: 50px;
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
