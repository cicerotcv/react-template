import { createTheme } from "@mui/material";

export default createTheme({
  typography: {
    fontFamily: "Inter",
  },
  palette: {
    primary: {
      main: "#ff4400",
    },
    secondary: {
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
    background: {
      default: "#202020",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
