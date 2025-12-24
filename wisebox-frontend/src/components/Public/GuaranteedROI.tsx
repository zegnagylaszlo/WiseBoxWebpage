import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const GuaranteedROI: React.FC = () => {
  const requirements = [
    {
      title: '3+ munkavállaló',
      description: 'Akik közül legalább egy a pénzügyi / adminisztrációs tevékenységgel foglalkozik',
    },
    {
      title: '50+ millió Ft árbevétel',
      description: 'Éves szinten akár 8-10 milliárd Ft éves árbevételig',
    },
  ];

  const benefits = [
    'Szeretnél befektetés nélkül pénzügyi kompetenciára szert tenni',
    'Szeretnéd adatvezérelten irányítani a cégedet',
  ];

  return (
    <Box
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
            GARANTÁLT MEGTÉRÜLÉS
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
            Biztos a megtérüléséd
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
            }}
          >
            Hónapról – hónapra, ha
          </Typography>
        </Box>

        {/* Requirements - 2 Column Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
            maxWidth: '900px',
            mx: 'auto',
            mb: 8,
          }}
        >
          {requirements.map((req, index) => (
            <Box
              key={index}
              sx={{
                p: 4,
                bgcolor: '#FFFFFF',
                borderRadius: '12px',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                  color: 'primary.main',
                }}
              >
                {req.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                }}
              >
                {req.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Divider */}
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            textAlign: 'center',
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          Vagy ezektől függetlenül:
        </Typography>

        {/* Benefits */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            maxWidth: '700px',
            mx: 'auto',
          }}
        >
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                justifyContent: 'center',
              }}
            >
              <CheckCircleOutlineIcon
                sx={{
                  color: 'success.main',
                  fontSize: '28px',
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  color: 'text.primary',
                  lineHeight: 1.7,
                }}
              >
                {benefit}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
