import React from 'react';
import { Box, Container, Card, CardContent, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const WhyWiseBox: React.FC = () => {
  const features = [
    {
      icon: <VisibilityIcon sx={{ fontSize: '75px' }} />,
      title: 'Elérhető könyvelési adatok',
      description: 'Elérhetővé tesszük a könyvelési adataidat, hogy minden pillanatban tiszta képet kapj vállalkozásod gazdasági helyzetéről.',
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: '75px' }} />,
      title: 'Döntéstámogatás',
      description: 'Értelmezhetővé tesszük az adatokat, hogy megalapozott döntéseket hozhass vállalkozásod működésével kapcsolatban.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: '75px' }} />,
      title: 'Egyszerű és érthető',
      description: 'Könnyen használható, felhasználó-barát rendszer, amely a bonyolult könyvelési adatokat egyszerű, érthető formában jeleníti meg.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
      <Container>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              color: 'primary.main',
              mb: 2,
            }}
          >
            MIÉRT VÁLASSZ MINKET?
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
            Egyszerű, átlátható, garantált megtérülés
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
                {/* Icon - No circle background */}
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

                {/* Title */}
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

                {/* Description */}
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

        {/* Bottom Text */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            Ahol a könyvelés találkozik az üzleti intelligenciával
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
