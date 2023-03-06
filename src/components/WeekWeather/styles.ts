import styled from "styled-components";

export const WeekWeatherContainer = styled.div`
  width: 410px;
  height: 100%;
  margin-left: auto;
  background: ${({ theme }) => theme.colors.translucentBlue};
  padding: ${({ theme }) => theme.gaps.m};

  @media (max-width: ${({ theme }) => theme.media.tabletSmall}) {
    width: 100%;
    height: auto;
    margin-top: ${({ theme }) => theme.gaps.m};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 900px;
    margin-top: ${({ theme }) => theme.gaps.m};
    height: auto;
  }
`;

export const WeekWeatherBlock = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 165px);
  gap: ${({ theme }) => theme.gaps.s};
  margin-top: ${({ theme }) => theme.gaps.m};

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    grid-template-columns: repeat(2, 120px);
    gap: ${({ theme }) => theme.gaps.s};
  }
`;
