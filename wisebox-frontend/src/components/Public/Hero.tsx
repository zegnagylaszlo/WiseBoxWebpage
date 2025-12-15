import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(135deg, #00964B 0%, #2B2B28 100%)', // Temporary gradient until we get the actual image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Overlay
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h1"
          color="white"
          gutterBottom
          sx={{
            mb: 2,
            fontSize: { xs: '28px', md: '35px' },
            lineHeight: { xs: '34px', md: '40px' },
          }}
        >
          Fedezd fel a könyvelési adataidat könnyen és érthetően
        </Typography>
        <Typography
          variant="h4"
          color="white"
          sx={{
            mb: 4,
            fontWeight: 400,
            fontSize: { xs: '18px', md: '22px' },
            lineHeight: { xs: '24px', md: '26px' },
          }}
        >
          A Wisebox egy döntéstámogató rendszer, ami a könyvelési adataidat láthatóvá és értelmezhetővé teszi
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Tudj meg többet
        </Button>
      </Container>
    </Box>
  );
};
