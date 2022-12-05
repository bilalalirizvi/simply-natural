import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

const theme = {
  headingColor: "#2b2f38",
  grey: "#5d6167",
  green: "#75C32C",
  red: "#EB5D5E",
  device: device,
};

const Button = styled.button`
  outline: none;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.red};
  height: 45px;
  padding: 0px 32px;
  border-radius: 30px;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 12px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.green};
  }
`;
export { theme, Button };
