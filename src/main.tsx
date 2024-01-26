import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // Define your palette colors here
    background: {
      default: '#fff', // Default background color
    },
  },
  // Add other theme customizations as needed
});


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
