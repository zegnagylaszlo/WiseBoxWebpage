import React from 'react';
import { Box, Container, Card, CardContent, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <VisibilityIcon sx={{ fontSize: '75px' }} />,
      title: 'Átlátható pénzügyek',
      description: 'Láthatóvá tesszük a könyvelési adataidat, hogy minden pillanatban tiszta képet kapj vállalkozásod pénzügyi helyzetéről.',
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: '75px' }} />,
      title: 'Döntéstámogatás',
      description: 'Értelmezhetővé tesszük az adatokat, hogy megalapozott döntéseket hozhass vállalkozásod jövőjével kapcsolatban.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: '75px' }} />,
      title: 'Egyszerű és érthető',
      description: 'Könnyen használható rendszer, amely a bonyolult könyvelési adatokat egyszerű, érthető formában jeleníti meg.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#FFFFFF' }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: '#2B2B28',
              fontSize: { xs: '32px', md: '45px' },
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            MIÉRT A WISEBOX?
          </Typography>
          <Box
            sx={{
              width: '80px',
              height: '4px',
              bgcolor: 'primary.main',
              mx: 'auto',
              mb: 3,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              color: '#2B2B28',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Könnyen és érthetően
          </Typography>
        </Box>
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
                elevation={0}
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  bgcolor: 'transparent',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ py: 4 }}>
                  <Box
                    sx={{
                      width: '105px',
                      height: '105px',
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
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
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: '30px',
                      color: '#2B2B28',
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '18px',
                      color: '#2B2B28',
                      lineHeight: 1.6,
                    }}
                  >
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
