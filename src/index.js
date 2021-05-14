import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "./css/tailwind.css";
import App from "./App";
import theme from "./theme";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
