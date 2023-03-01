import styled from "styled-components";

export const WeatherSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.gaps.m};
`;

export const WeatherSwitcherButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps.l}`};
  border-radius: ${({ theme }) => theme.borderSizes.m};
  background: linear-gradient(
    116.79deg,
    rgba(255, 255, 255, 0.48) -41.94%,
    rgba(255, 255, 255, 0.12) 57.51%
  );
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: #fff;
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps.m};
  }
`;
