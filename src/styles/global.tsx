import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

export default function GlobalStyles() {
  return (
    <MUIGlobalStyles
      styles={(theme) => ({
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        '#root': {
          minHeight: '100vh',
          color: theme.palette.getContrastText(theme.palette.primary.main),
        },
      })}
    />
  );
}
