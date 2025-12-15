import React from 'react';
import { Box, Container, Card, CardContent, Typography, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InsightsIcon from '@mui/icons-material/Insights';

export const ServiceCards: React.FC = () => {
  const services = [
    {
      icon: <BusinessCenterIcon sx={{ fontSize: '64px' }} />,
      title: 'Pénzügyi betekintés',
      description: 'A Wisebox átláthatóvá teszi vállalkozásod könyvelési adatait. Valós időben követheted a bevételeket, kiadásokat és a pénzügyi teljesítményt.',
    },
    {
      icon: <InsightsIcon sx={{ fontSize: '64px' }} />,
      title: 'Adatalapú döntések',
      description: 'Ne találgatásokra alapozd a vállalkozásod irányítását. A Wisebox segítségével megértheted a számokat és magabiztosan dönthetsz.',
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(90deg, #099149 0%, #2B3029 100%)',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ mb: 2, color: 'white' }}
        >
          Hogyan segít a Wisebox?
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 6, color: 'white', maxWidth: '800px', mx: 'auto', opacity: 0.9 }}
        >
          Láthatóvá és értelmezhetővé tesszük a könyvelési adataidat
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
          }}
        >
          {services.map((service, index) => (
            <Box key={index}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  boxShadow: '0px 5px 10px rgba(153,153,153,0.35)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 3 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: '#f5f5f5',
              },
            }}
          >
            Kezdjük el
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
