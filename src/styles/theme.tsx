import { createTheme } from '@mui/material';

export default createTheme({
  typography: {
    fontFamily: 'Inter',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#640000',
    },
    secondary: {
      main: '#00217a',
      contrastText: '#ffcc00',
    },
    background: {},
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
