import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '400px', md: '600px' },
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(/images/hero-background.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography
          variant="h1"
          color="white"
          gutterBottom
          sx={{
            mb: 3,
            fontSize: { xs: '32px', md: '50px' },
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          WISEBOX
        </Typography>
        <Typography
          variant="h2"
          color="white"
          sx={{
            mb: 5,
            fontWeight: 400,
            fontSize: { xs: '20px', md: '35px' },
            lineHeight: 1.4,
          }}
        >
          Fedezd fel a könyvelési adataidat könnyen és érthetően
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="#contact"
          sx={{
            px: 5,
            py: 2,
            fontSize: '17px',
            fontWeight: 700,
            textTransform: 'uppercase',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0, 150, 75, 0.3)',
            '&:hover': {
              boxShadow: '0 6px 16px rgba(0, 150, 75, 0.4)',
            },
          }}
        >
          IDŐPONTOT KÉREK
        </Button>
      </Container>
    </Box>
  );
};
