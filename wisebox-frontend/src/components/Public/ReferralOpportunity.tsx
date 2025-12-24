import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const ReferralOpportunity: React.FC = () => {
  return (
    <Box
      id="ajanloi-program"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: 'background.paper',
      }}
    >
      <Container>
        {/* Section Header - Modern Pattern */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              color: 'primary.main',
              mb: 2,
            }}
          >
            ÉRTÉK MEGOSZTÁSA
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: 'text.primary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Ajánlói lehetőség
          </Typography>
        </Box>

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
              variant="h3"
              sx={{
                mb: 3,
                color: 'text.primary',
              }}
            >
              Az ajánlásokban hiszünk, amit díjazunk is
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                lineHeight: 1.7,
                color: 'text.secondary',
              }}
            >
              Megtetszett a szoftverünk, vagy már büszke partnerünk vagy és szeretnéd másokkal is megosztani megoldásunkat? Lehetőséget biztosítunk, hogy másoknak ajánlhasd a Wisebox szoftverünket és extra díjazásban részesülj. A win-win szituációkra törekszünk, ezért ha felkeltettük az érdeklődésedet vedd fel velünk a kapcsolatot és tájékoztatunk a részletekről!
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#contact"
              sx={{
                px: 4,
                fontWeight: 600,
              }}
            >
              Időpontot kérek
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
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              <img
                src="/images/helping-senior-on-computer-1.webp"
                alt="Ajánlói lehetőség"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
