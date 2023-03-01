import styled from "styled-components";

export const WeatherCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 165px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderSizes.m};
  cursor: pointer;
  user-select: none;
`;

export const WeatherCardText = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-align: center;
  color: #ffffff;
`;

export const WeatherCardImg = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 0 auto;
`;