import React from 'react';
import { Box, Container, Card, CardContent, Typography, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InsightsIcon from '@mui/icons-material/Insights';

export const ServiceCards: React.FC = () => {
  const services = [
    {
      icon: <BusinessCenterIcon sx={{ fontSize: '75px' }} />,
      title: 'Pénzügyi betekintés',
      description: 'A Wisebox átláthatóvá teszi vállalkozásod könyvelési adatait. Valós időben követheted a bevételeket, kiadásokat és a pénzügyi teljesítményt.',
    },
    {
      icon: <InsightsIcon sx={{ fontSize: '75px' }} />,
      title: 'Adatalapú döntések',
      description: 'Ne találgatásokra alapozd a vállalkozásod irányítását. A Wisebox segítségével megértheted a számokat és magabiztosan dönthetsz.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(90deg, #00964B 0%, #2B2B28 100%)',
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: 'white',
              fontSize: { xs: '32px', md: '45px' },
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            HOGYAN SEGÍT A WISEBOX?
          </Typography>
          <Box
            sx={{
              width: '80px',
              height: '4px',
              bgcolor: 'white',
              mx: 'auto',
              mb: 3,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              color: 'white',
              maxWidth: '800px',
              mx: 'auto',
              opacity: 0.95,
            }}
          >
            Láthatóvá és értelmezhetővé tesszük a könyvelési adataidat
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
            mb: 5,
          }}
        >
          {services.map((service, index) => (
            <Box key={index}>
              <Card
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
                <CardContent sx={{ p: 5 }}>
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
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: '30px',
                      color: '#2B2B28',
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '18px',
                      color: '#2B2B28',
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 5,
              py: 2,
              fontSize: '17px',
              fontWeight: 700,
              textTransform: 'uppercase',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '&:hover': {
                bgcolor: '#f5f5f5',
                boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
              },
            }}
          >
            KEZDJÜK EL
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
