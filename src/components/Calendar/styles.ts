import styled from "styled-components";

export const CalendarWrapper = styled.div`
  padding-top: ${({ theme }) => theme.gaps.xl};
  padding-left: ${({ theme }) => theme.gaps["2xl"]};

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => theme.gaps.l};
    padding-bottom: 0px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: ${({ theme }) => theme.gaps.m};
    padding-bottom: 0px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobileSmall}) {
    padding: ${({ theme }) => theme.gaps.s};
    padding-bottom: 0px;
  }
`;

export const Time = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: #000 0 0 2px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: #000 0 0 2px;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const CalendarButton = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps.xl}`};
  border-radius: ${({ theme }) => theme.borderSizes.m};
  border: none;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  margin-top: ${({ theme }) => theme.gaps.m};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: ${({ theme }) => `${theme.gaps.m} ${theme.gaps.l}`};
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const CalendarEvents = styled.ul`
  max-height: 315px;
  overflow: scroll;
  margin-top: ${({ theme }) => theme.gaps.m};
`;

export const CalendarText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: #000 0 0 2px;
  margin-top: ${({ theme }) => theme.gaps.m};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
