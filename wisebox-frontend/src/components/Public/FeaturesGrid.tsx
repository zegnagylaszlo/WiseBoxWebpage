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
            FUNKCIÓK ÉS LEHETŐSÉGEK
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
            Következő szintre emeljük vállalkozásodat
          </Typography>
        </Box>

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
              sx={{
                height: '100%',
                textAlign: 'center',
                bgcolor: '#FFFFFF',
                p: 4,
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {/* Icon - No circular background */}
                <Box
                  sx={{
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  {React.cloneElement(feature.icon, { sx: { fontSize: '48px' } })}
                </Box>

                {/* Feature Title */}
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  {feature.title}
                </Typography>

                {/* Feature Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
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
