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
  background: linear-gradient(116.79deg, #ffffff7a -41.94%, #ffffff1f 57.51%);
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:nth-last-child(n + 2) {
    margin-right: ${({ theme }) => theme.gaps.m};
  }
`;
