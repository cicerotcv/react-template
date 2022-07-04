import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import NavigationRoutes from "./navigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CssBaseline />
      <BrowserRouter>
        <NavigationRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
