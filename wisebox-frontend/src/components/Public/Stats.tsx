import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const Stats: React.FC = () => {
  const stats = [
    {
      title: '25+ milliárd Ft árbevétel',
      description: 'Wisebox szoftverünket használó cégek éves árbevétele meghaladta a 25 milliárd forintot 2024-ben',
    },
    {
      title: '80+ felhasználó cég',
      description: 'Jelenleg több mint 80 cég szavazott bizalmat és használja a rendszerünket nap mint nap, és ez a szám folyamatosan növekszik',
    },
    {
      title: '6.700+ megtakarított óra',
      description: '3-5 főnél fél fő munkáját,\n5-10 főnél 1 fő munkáját,\n10+ főnél 1.5+ fő munkáját tudjuk megtakarítani hónapról hónapra',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#f3fff6',
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
          WISEBOX SZÁMOKBAN
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

        {/* Stats Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            mb: 6,
          }}
        >
          {stats.map((stat, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                p: 4,
                bgcolor: 'white',
                borderRadius: '8px',
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  color: '#2B2B28',
                  fontSize: { xs: '24px', md: '28px' },
                  fontWeight: 700,
                }}
              >
                {stat.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#2B2B28',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line',
                }}
              >
                {stat.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Button */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              px: 5,
              py: 2,
              fontSize: '17px',
              fontWeight: 700,
              textTransform: 'uppercase',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '&:hover': {
                bgcolor: '#2E8640',
                boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
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
