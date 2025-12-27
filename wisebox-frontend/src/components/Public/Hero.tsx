import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: '#FFFFFF',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '60% 40%' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Left Column - Text Content */}
          <Box>
            {/* Overline */}
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                color: 'primary.main',
                mb: 2,
              }}
            >
              A KKV-K KONTROLLING RENDSZERE
            </Typography>

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                color: 'text.primary',
                maxWidth: '600px',
              }}
            >
              Fedezd fel a könyvelésben rejlő adataidat könnyen és érthetően
            </Typography>

            {/* Subheadline */}
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: '500px',
              }}
            >
              Mert a válaszokra van szükséged, nem az adatokra
            </Typography>

            {/* CTA Button */}
            <Box
              sx={{
                mb: 4,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="#contact"
              >
                IDŐPONTOT KÉREK
              </Button>
            </Box>

            {/* Trust Indicator */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                color: 'text.secondary',
              }}
            >
              <CheckCircleOutlineIcon sx={{ color: 'success.main', fontSize: '24px' }} />
              <Typography variant="body2" sx={{ fontSize: '15px' }}>
                Több mint 80+ magyar KKV bizalmát élvezzük
              </Typography>
            </Box>
          </Box>

          {/* Right Column - Visual/Logo */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="/WB_logo/WB LOGO BLACK FIN.png"
              alt="WiseBox Logo"
              sx={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.08))',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
