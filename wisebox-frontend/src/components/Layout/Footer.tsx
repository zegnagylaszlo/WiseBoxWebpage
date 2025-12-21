import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 1.5,
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <img
              src="/images/wisebox-logo.webp"
              alt="Wisebox"
              style={{ height: '40px', width: 'auto' }}
            />
            <Typography
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: '16px',
                letterSpacing: '0.5px',
              }}
            >
              WISEBOX
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.85,
              fontSize: '16px',
              lineHeight: 1.6,
            }}
          >
            A KKV-k könyvelési rendszere -  Könyvelési adatok könnyen és érthetően - Mert a válaszokra van szükséged, nem az adatokra
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
              <a href="#partnereink">Partnereink</a>
              <a href="#referenciaink">Referenciáink</a>
              <a href="#contact">Kapcsolat</a>
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
              <a href="#ajanloi-program">Ajánlói program</a>
              <a href="#contact">Időpontot kérek</a>
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
              <a href="/legal/ASZF_Wisebox_20240101.pdf" target="_blank" rel="noopener noreferrer">ÁSZF</a>
              <a href="/legal/11.Adatkezelesi_Tajekoztato_Weblap_WB.pdf" target="_blank" rel="noopener noreferrer">Adatkezelési Tájékoztató</a>
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
          {/* Security Badges */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3,
              mb: 3,
            }}
          >
            {/* GDPR Badge */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <VerifiedUserIcon sx={{ color: '#00964B', fontSize: '22px' }} />
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '13px',
                  fontWeight: 500,
                }}
              >
                GDPR megfelelő
              </Typography>
            </Box>

            {/* SSL Badge */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <LockIcon sx={{ color: '#00964B', fontSize: '22px' }} />
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '13px',
                  fontWeight: 500,
                }}
              >
                256-bit titkosítás
              </Typography>
            </Box>

            {/* EU Servers Badge */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <CloudDoneIcon sx={{ color: '#00964B', fontSize: '22px' }} />
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '13px',
                  fontWeight: 500,
                }}
              >
                EU szerverek
              </Typography>
            </Box>
          </Box>

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
            Created and designed by Movement Makerz & WiseBox Team
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
