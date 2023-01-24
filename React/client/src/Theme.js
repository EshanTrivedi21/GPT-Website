import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    primary: {
      main: "#1370f0",
      contrastText: "#000",
    },
    secondary: {
      main: "#5ae0ff",
      contrastText: "#000",
    },
    custom: {
      main: "#ffffff",
      contrastText: "#000",
    },
  },
});

export function Theme(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}