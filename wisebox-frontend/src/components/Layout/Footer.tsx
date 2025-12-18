import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2B2B28',
        color: 'white',
        py: { xs: 4, md: 6 },
        mt: 0,
      }}
    >
      <Container>
        {/* Logo and tagline */}
        <Box sx={{ mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
          <img
            src="/images/wisebox-logo.webp"
            alt="Wisebox"
            style={{ height: '40px', width: 'auto', marginBottom: '12px' }}
          />
          <Typography
            variant="body2"
            sx={{
              opacity: 0.85,
              fontSize: '16px',
              lineHeight: 1.6,
            }}
          >
            Könyvelési adatok könnyen és érthetően
          </Typography>
        </Box>

        {/* Three columns of links */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.85,
                fontSize: '16px',
                lineHeight: 2,
                '& a': {
                  color: 'white',
                  textDecoration: 'none',
                  display: 'block',
                  '&:hover': {
                    color: 'primary.main',
                  },
                },
              }}
            >
              <a href="/partnerek">Partnerek</a>
              <a href="/referenciak">Referenciák</a>
              <a href="/szolgaltatasok">Szolgáltatások</a>
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.85,
                fontSize: '16px',
                lineHeight: 2,
                '& a': {
                  color: 'white',
                  textDecoration: 'none',
                  display: 'block',
                  '&:hover': {
                    color: 'primary.main',
                  },
                },
              }}
            >
              <a href="/uzletfejlesztok">Üzletfejlesztők</a>
              <a href="/ajanloi-program">Ajánlói program</a>
              <a href="#contact">KONZULTÁCIÓT KÉREK</a>
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.85,
                fontSize: '16px',
                lineHeight: 2,
                '& a': {
                  color: 'white',
                  textDecoration: 'none',
                  display: 'block',
                  '&:hover': {
                    color: 'primary.main',
                  },
                },
              }}
            >
              <a href="/aszf">ÁSZF</a>
              <a href="/adatkezeles">Adatkezelési Tájékoztató</a>
            </Typography>
          </Box>
        </Box>

        {/* Bottom section */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            pt: 3,
            mt: 2,
          }}
        >
          <Typography
            variant="body2"
            align="center"
            sx={{
              opacity: 0.75,
              fontSize: '14px',
              mb: 1,
            }}
          >
            Copyright © Wisebox | Minden jog fenntartva
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              opacity: 0.6,
              fontSize: '12px',
            }}
          >
            Created and designed by Movement Makerz
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
