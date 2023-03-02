import styled from "styled-components";
import { useBackgroundImage } from "@hooks";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background: url(${useBackgroundImage}) center center/ cover no-repeat;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: block;
    height: auto;
  }
`;
