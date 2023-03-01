import styled from "styled-components";

export const EventWrapper = styled.div`
  background: rgba(5, 66, 107, 0.7);
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps.l}`};
  border-radius: ${({ theme }) => theme.borderSizes.m};
  z-index: 50;
  &:nth-last-child(n + 2) {
    margin-bottom: ${({ theme }) => theme.gaps.s};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const EventText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 400px;
  color: #fff;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
