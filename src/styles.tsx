import styled from "styled-components";
import CurrencyInput from "react-currency-input-field";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const deviceBreakpoints = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const AppContainer = styled.div`
  margin: 1rem;
  text-align: center;
`;

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;

export const Body = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
`;

export const Input = styled(CurrencyInput)`
  background: #f3f3f3;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1.5rem;
  margin: auto;
  padding: 1rem;
`;
