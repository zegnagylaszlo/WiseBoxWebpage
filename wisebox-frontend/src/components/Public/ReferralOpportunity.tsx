import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const ReferralOpportunity: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'white',
      }}
    >
      <Container>
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            color: '#2B2B28',
            fontSize: { xs: '32px', md: '45px' },
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          AJÁNLÓI LEHETŐSÉG
        </Typography>

        {/* Green Underline */}
        <Box
          sx={{
            width: '80px',
            height: '4px',
            bgcolor: 'primary.main',
            mx: 'auto',
            mb: 8,
          }}
        />

        {/* Content Section */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
            alignItems: 'center',
          }}
        >
          {/* Left Column - Text */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontSize: { xs: '24px', md: '28px' },
                fontWeight: 700,
                color: '#2B2B28',
              }}
            >
              Az ajánlásokban hiszünk, amit díjazunk is
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '18px',
                lineHeight: 1.8,
                color: '#2B2B28',
              }}
            >
              Megtetszett a szoftverünk, vagy már büszke partnerünk vagy és szeretnéd másokkal is megosztani megoldásunkat? Lehetőséget biztosítunk, hogy másoknak megmutasd Wisebox szoftverünket extra díjazásban részesülj. A win-win szituációkra törekszünk, ezért ha felkeltettük az érdeklődésedet vedd fel velük a kapcsolatot és tájékoztatunk a részletekről!
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '15px',
                fontWeight: 600,
                textTransform: 'uppercase',
                borderRadius: '4px',
                '&:hover': {
                  bgcolor: '#2E8640',
                },
              }}
            >
              Konzultációt kérek
            </Button>
          </Box>

          {/* Right Column - Image */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: '600px',
              }}
            >
              <img
                src="/images/helping-senior-on-computer-1.webp"
                alt="Ajánlói lehetőség"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '8px',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
