import styled from "styled-components";

export const WeatherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 316px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gaps.m};
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderSizes.m};
  cursor: pointer;
`;

export const WeatherImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
`;

export const WeatherInfo = styled.div`
  display: block;
`;

export const WeatherText = styled.div`
  display: block;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: #fff;
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
  color: #ffffff;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

export const WeatherDegreeSup = styled.sup`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: #ffffff;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;