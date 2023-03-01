import styled from "styled-components";

export const WeekWeatherContainer = styled.div`
  width: 410px;
  height: 100%;
  margin-left: auto;
  background: rgba(5, 66, 107, 0.7);
  padding: ${({ theme }) => theme.gaps.m};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
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
`;
