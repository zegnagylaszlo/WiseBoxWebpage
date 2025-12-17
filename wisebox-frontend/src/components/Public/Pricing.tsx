import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const Pricing: React.FC = () => {
  const circles = [
    {
      number: '1',
      color: '#00964B', // Green
      title: 'Kötöttségek nélkül',
      description: 'Elköteleződés nélkül, amíg szeretnéd',
    },
    {
      number: '2',
      color: '#FF8C00', // Orange
      title: 'Beüzemelési költségek nélkül',
      description: 'Más rendszerekkel ellentétben ingyenes beüzemelés',
    },
    {
      number: '3',
      color: '#6EC1E4', // Blue
      title: 'Rejtett költségek nélkül',
      description: 'Extra költségekkel nem fogsz találkozni',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#F5F5F5',
      }}
    >
      <Container>
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            color: '#2B2B28',
            fontSize: { xs: '28px', md: '42px' },
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
            lineHeight: 1.3,
          }}
        >
          ELKÖTELEZŐDÉS ÉS REJTETT KÖLTSÉGEK NÉLKÜL
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
            mb: 8,
            textAlign: 'center',
            fontSize: '20px',
            color: '#2B2B28',
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Ismerd meg előfizetéses rendszerünket<br />
          Csak szabadon, a döntés a Te kezedben!
        </Typography>

        {/* Three Circles */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 4,
            maxWidth: '1000px',
            mx: 'auto',
            mb: 6,
          }}
        >
          {circles.map((circle, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Numbered Circle */}
              <Box
                sx={{
                  bgcolor: circle.color,
                  color: 'white',
                  borderRadius: '50%',
                  width: { xs: '220px', md: '240px' },
                  height: { xs: '220px', md: '240px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 3,
                  mb: 3,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '60px', md: '70px' },
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  {circle.number}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  {circle.title}
                </Typography>
              </Box>

              {/* Description Below Circle */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  textAlign: 'center',
                  color: '#2B2B28',
                  lineHeight: 1.6,
                  maxWidth: '250px',
                }}
              >
                {circle.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Button */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 5,
              py: 2,
              fontSize: '17px',
              fontWeight: 700,
              textTransform: 'uppercase',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0, 150, 75, 0.3)',
              '&:hover': {
                boxShadow: '0 6px 16px rgba(0, 150, 75, 0.4)',
              },
            }}
          >
            Konzultációt kérek
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
