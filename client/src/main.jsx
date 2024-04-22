import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";

// Crear un tema con la paleta de colores
const theme = createTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#82B1FF',
      contrastText: '#0A4958',
    },
    secondary: {
      main: '#5C4033',
      contrastText: '#000',
    },
    error: {
      main: '#FF5252',
    },
    background: {
      default: '#F5F5F5',
      paper: '#fff',
    },
    text: {
      primary: '#424242',
      secondary: '#757575',
    },
  },
  // Añade configuraciones adicionales para el estilo Glassmorphism
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(6px)',
        },
      },
    },
    // Puedes añadir más componentes y personalizarlos según necesites
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
