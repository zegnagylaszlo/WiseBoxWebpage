import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export const GuaranteedROI: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#FFFFFF',
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
          BIZTOS A MEGTÉRÜLÉSÉD
        </Typography>

        {/* Green Underline */}
        <Box
          sx={{
            width: '80px',
            height: '4px',
            bgcolor: 'primary.main',
            mx: 'auto',
            mb: 3,
          }}
        />

        {/* Subtitle */}
        <Typography
          variant="h5"
          sx={{
            mb: 6,
            textAlign: 'center',
            fontSize: '22px',
            color: '#2B2B28',
          }}
        >
          Hónapról – hónapra, ha
        </Typography>

        {/* Two Circles */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
            maxWidth: '900px',
            mx: 'auto',
            mb: 6,
          }}
        >
          {/* Circle 1 */}
          <Box
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: '50%',
              width: { xs: '250px', md: '300px' },
              height: { xs: '250px', md: '300px' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4,
              mx: 'auto',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: '28px',
                fontWeight: 700,
                mb: 2,
                textAlign: 'center',
              }}
            >
              3+ munkavállaló
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '16px',
                textAlign: 'center',
                lineHeight: 1.5,
              }}
            >
              Akik közül legalább egy a pénzügyi / adminisztrációs tevékenységgel foglalkozik
            </Typography>
          </Box>

          {/* Circle 2 */}
          <Box
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: '50%',
              width: { xs: '250px', md: '300px' },
              height: { xs: '250px', md: '300px' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4,
              mx: 'auto',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: '28px',
                fontWeight: 700,
                mb: 2,
                textAlign: 'center',
              }}
            >
              50+ millió Ft árbevétel
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '16px',
                textAlign: 'center',
                lineHeight: 1.5,
              }}
            >
              Éves szinten akár 8-10 milliárd Ft éves árbevételig
            </Typography>
          </Box>
        </Box>

        {/* Divider */}
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 700,
            color: '#2B2B28',
          }}
        >
          Vagy ezektől függetlenül:
        </Typography>

        {/* Two Text Items */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: '700px',
            mx: 'auto',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              textAlign: 'center',
              color: '#2B2B28',
              lineHeight: 1.6,
            }}
          >
            Szeretnél befektetés nélkül pénzügyi kompetenciára szert tenni
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              textAlign: 'center',
              color: '#2B2B28',
              lineHeight: 1.6,
            }}
          >
            Szeretnéd adatvezérelten irányítani a cégedet
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
