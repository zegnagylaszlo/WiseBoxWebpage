import React from 'react';
import { Box, Container, Card, CardContent, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <VisibilityIcon sx={{ fontSize: '48px' }} />,
      title: 'Átlátható pénzügyek',
      description: 'Láthatóvá tesszük a könyvelési adataidat, hogy minden pillanatban tiszta képet kapj vállalkozásod pénzügyi helyzetéről.',
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: '48px' }} />,
      title: 'Döntéstámogatás',
      description: 'Értelmezhetővé tesszük az adatokat, hogy megalapozott döntéseket hozhass vállalkozásod jövőjével kapcsolatban.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: '48px' }} />,
      title: 'Egyszerű és érthető',
      description: 'Könnyen használható rendszer, amely a bonyolult könyvelési adatokat egyszerű, érthető formában jeleníti meg.',
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ mb: 2, color: 'text.primary' }}
        >
          Miért a Wisebox?
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
        >
          A Wisebox segít megérteni a könyvelési adataidat és jobb döntéseket hozni
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Box key={index}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0px 8px 16px rgba(0, 150, 75, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
