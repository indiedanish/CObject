import { Box, Button, Container, Grid, Typography, styled } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
      
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Login Screen C-Object
          </TypographyH1>
         
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
