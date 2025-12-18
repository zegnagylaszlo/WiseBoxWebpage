import React from 'react';
import { Box, Container, Card, CardContent, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: '60px' }} />,
      title: '39+ bővülő funkció',
      description: 'Folyamatosan bővülő funkciók controlling szoftverünkben',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: '60px' }} />,
      title: 'Korlátlan felhasználó',
      description: 'Te határozod meg a felhasználók számát, nincsen limit',
    },
    {
      icon: <SchoolIcon sx={{ fontSize: '60px' }} />,
      title: 'Bevezetés-oktatás',
      description: 'Minden csomag tartalmazza a bevezetést és az oktatást is',
    },
    {
      icon: <BusinessIcon sx={{ fontSize: '60px' }} />,
      title: 'Cégcsoportok kezelése',
      description: 'Cégcsoportjaidról egy helyen információdhatsz. Extra 8+ funkció',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: '60px' }} />,
      title: 'Jogosultsági szintek',
      description: 'Jogosultsági szinteket határozhatsz meg vezetőidnek',
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: '60px' }} />,
      title: 'Költséghely-munkaszám',
      description: 'Projektszámmal is dolgozunk. Extra 12+ funkció',
    },
  ];

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
            fontSize: { xs: '28px', md: '40px' },
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          KÖVETKEZŐ SZINTRE EMELJÜK VÁLLALKOZÁSODAT
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

        {/* Features Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              elevation={0}
              sx={{
                height: '100%',
                textAlign: 'center',
                borderRadius: '8px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0px 10px 20px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                {/* Orange Circular Icon */}
                <Box
                  sx={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    bgcolor: 'secondary.main', // Orange
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  {feature.icon}
                </Box>

                {/* Feature Title */}
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: '24px',
                    color: '#2B2B28',
                    mb: 2,
                  }}
                >
                  {feature.title}
                </Typography>

                {/* Feature Description */}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    color: '#2B2B28',
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
