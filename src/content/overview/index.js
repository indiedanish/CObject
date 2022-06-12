import { Box, Container, Card, styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import Logo from 'src/components/LogoSign';
import Hero from './Hero';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>C-Object</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
        
        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          <Hero />
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
