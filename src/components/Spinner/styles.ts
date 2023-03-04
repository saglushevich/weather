import styled from "styled-components";

import spinner from "@assets/spinner.svg";

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #ffffff;
`;

export const SpinnerImg = styled.div`
  height: 400px;
  width: 400px;
  background: url(${spinner}) center center/ cover no-repeat;
`;
