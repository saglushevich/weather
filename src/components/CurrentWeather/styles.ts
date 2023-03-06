import styled from "styled-components";

export const WeatherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 316px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps.m};
  background: ${({ theme }) => theme.colors.translucentWhite};
  border-radius: ${({ theme }) => theme.borderSizes.m};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    width: 256px;
  }
`;

export const WeatherImage = styled.img`
  width: 125px;
  height: 110px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 110px;
    height: 90px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    width: 100px;
    height: 80px;
  }
`;

export const WeatherInfo = styled.div`
  display: block;
`;

export const WeatherText = styled.div`
  display: block;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const WeatherDegree = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

export const WeatherDegreeSup = styled.sup`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
