import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const Pricing: React.FC = () => {
  const features = [
    {
      number: '1',
      title: 'Kötöttségek nélkül',
      description: 'Elköteleződés nélkül, amíg szeretnéd',
    },
    {
      number: '2',
      title: 'Beüzemelési költségek nélkül',
      description: 'Más rendszerekkel ellentétben ingyenes beüzemelés',
    },
    {
      number: '3',
      title: 'Rejtett költségek nélkül',
      description: 'Extra költségekkel nem fogsz találkozni',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: '#FFFFFF',
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
            ELŐFIZETÉSI MODELL
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: 'text.primary',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            Elköteleződés és rejtett költségek nélkül
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Ismerd meg előfizetéses rendszerünket – Csak szabadon, a döntés a Te kezedben!
          </Typography>
        </Box>

        {/* Feature Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            mb: 6,
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                p: 4,
                bgcolor: 'background.paper',
                borderRadius: '12px',
                borderTop: '4px solid',
                borderColor: 'primary.main',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
                textAlign: 'center',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0px 4px 16px rgba(0,0,0,0.1)',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 2,
                }}
              >
                {feature.number}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* CTA */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#contact"
            sx={{
              px: 5,
              fontWeight: 600,
            }}
          >
            IDŐPONTOT KÉREK
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
