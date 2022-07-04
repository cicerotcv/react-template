import { Box, Container } from '@mui/material';
import { lighten, shade } from 'polished';

function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Box
        sx={(theme) => ({
          padding: 2,
          borderRadius: 1,
          boxShadow: `0 5px 15px ${shade(
            0.1,
            theme.palette.background.default
          )}`,
          backgroundColor: lighten(0.05, theme.palette.background.default),
        })}>
        Home
      </Box>
    </Container>
  );
}

export default Home;
