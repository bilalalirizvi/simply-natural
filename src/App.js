import React from "react";
import "./App.css";
import Routings from "./config/Routings";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styled";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routings />
    </ThemeProvider>
  );
};

export default App;
