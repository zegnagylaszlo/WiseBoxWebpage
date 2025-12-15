import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const StrategyPartners: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'info.main', // Blue #6EC1E4
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            color: 'white',
            fontSize: { xs: '32px', md: '45px' },
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        >
          STRATÉGIAI PARTNEREINK
        </Typography>

        {/* White Underline */}
        <Box
          sx={{
            width: '80px',
            height: '4px',
            bgcolor: 'white',
            mx: 'auto',
            mb: 3,
          }}
        />

        {/* Subtitle */}
        <Typography
          variant="h5"
          sx={{
            mb: 5,
            color: 'white',
            fontSize: '22px',
            fontWeight: 400,
          }}
        >
          Kizárólagos üzletfejlesztő partnerünk
        </Typography>

        {/* Logo */}
        <Box
          sx={{
            mb: 4,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src="/images/B2B-Prosales-logo.webp"
            alt="B2B ProSales"
            style={{
              maxWidth: '300px',
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            mb: 5,
            color: 'white',
            fontSize: '18px',
            lineHeight: 1.6,
            maxWidth: '700px',
            mx: 'auto',
          }}
        >
          Küldetésük, hogy a legjobb termékeket, szolgáltatásokat eljuttassák az Ügyfeleikhez. Érejük a függetlenségben rejlik. Céljuk, hogy a B2B név egyet jelentsen a Minőséggel és a Megbízhatósággal.
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: 'white',
            color: 'info.main',
            px: 5,
            py: 2,
            fontSize: '17px',
            fontWeight: 700,
            textTransform: 'uppercase',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            '&:hover': {
              bgcolor: '#f5f5f5',
              boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
            },
          }}
        >
          B2B ProSales
        </Button>
      </Container>
    </Box>
  );
};
