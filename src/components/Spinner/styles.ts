import styled from "styled-components";

import spinner from "@assets/spinner.svg";

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.white};
`;

export const SpinnerImg = styled.div`
  height: 400px;
  width: 400px;
  background: url(${spinner}) center center/ cover no-repeat;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 300px;
    height: 300px;
  }
`;
