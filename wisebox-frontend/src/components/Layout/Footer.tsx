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
        bgcolor: 'background.paper',
        color: 'text.primary',
        py: { xs: 6, md: 8 },
        mt: 0,
        borderTop: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <Container>
        {/* Logo and tagline */}
        <Box sx={{ mb: 6, textAlign: { xs: 'center', md: 'left' } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 2,
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
                color: 'text.primary',
                fontWeight: 700,
                fontSize: '18px',
                letterSpacing: '0.5px',
              }}
            >
              WISEBOX
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              fontSize: '15px',
              lineHeight: 1.7,
              maxWidth: '600px',
              mx: { xs: 'auto', md: 0 },
            }}
          >
            A KKV-k könyvelési rendszere - Könyvelési adatok könnyen és érthetően - Mert a válaszokra van szükséged, nem az adatokra
          </Typography>
        </Box>

        {/* Three columns of links */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 4,
            mb: 6,
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                fontSize: '15px',
                lineHeight: 2.2,
                '& a': {
                  color: 'text.primary',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'color 0.2s ease',
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
                fontSize: '15px',
                lineHeight: 2.2,
                '& a': {
                  color: 'text.primary',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'color 0.2s ease',
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
                fontSize: '15px',
                lineHeight: 2.2,
                '& a': {
                  color: 'text.primary',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'color 0.2s ease',
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
            borderTop: '1px solid',
            borderColor: 'grey.200',
            pt: 4,
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
              gap: 4,
              mb: 4,
            }}
          >
            {/* GDPR Badge */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <VerifiedUserIcon sx={{ color: 'primary.main', fontSize: '24px' }} />
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: '14px',
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
                gap: 1.5,
              }}
            >
              <LockIcon sx={{ color: 'primary.main', fontSize: '24px' }} />
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: '14px',
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
                gap: 1.5,
              }}
            >
              <CloudDoneIcon sx={{ color: 'primary.main', fontSize: '24px' }} />
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: '14px',
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
              color: 'text.secondary',
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
              color: 'text.secondary',
              fontSize: '13px',
              opacity: 0.7,
            }}
          >
            Created and designed by Movement Makerz & WiseBox Team
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
