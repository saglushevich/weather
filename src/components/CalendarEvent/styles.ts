import styled from "styled-components";

export const EventWrapper = styled.div`
  background: ${({ theme }) => theme.colors.translucentBlue};
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps.l}`};
  border-radius: ${({ theme }) => theme.borderSizes.m};
  z-index: 50;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.s};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    padding: ${({ theme }) => `${theme.gaps.s} ${theme.gaps.m}`};
  }
`;

export const EventText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 400px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;
