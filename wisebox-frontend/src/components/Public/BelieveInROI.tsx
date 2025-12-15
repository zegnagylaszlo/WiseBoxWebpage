import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const BelieveInROI: React.FC = () => {
  const benefits = [
    'le tudnád csökkenteni a könyvelőddel folytatott kommunikációt?',
    'egyre szakmaibb rálátásod lenne a könyvelésedre: az eredményedre, áfádra, nyitott vevő / szállítói számláidra, bankjaidra, ... ?',
    'egyre kevesebbet kellene kérdezned?',
    'a könyvelési adataidból döntéstámogató információkat kapnál?',
    'minimalizálni tudnád a rendszeres jelentések elkészítésére fordított időt és erőforrást?',
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
            fontSize: { xs: '32px', md: '45px' },
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          MEGTÉRÜLÉSEKBEN HISZÜNK
        </Typography>

        {/* Green Underline */}
        <Box
          sx={{
            width: '80px',
            height: '4px',
            bgcolor: 'primary.main',
            mx: 'auto',
            mb: 6,
          }}
        />

        {/* Two Column Layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '60% 40%' },
            gap: 4,
          }}
        >
          {/* Left Column */}
          <Box>
            {/* Green Box */}
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                p: 4,
                borderRadius: '8px',
                mb: 4,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  lineHeight: 1.6,
                }}
              >
                A Wisebox egy döntéstámogató rendszer, ami a könyvelési adataidat láthatóvá és értelmezhetővé teszi
              </Typography>
            </Box>

            {/* Mi lenne ha... */}
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: '#2B2B28',
                fontSize: '30px',
                fontWeight: 700,
              }}
            >
              Mi lenne ha...
            </Typography>

            {/* Checkmark List */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {benefits.map((benefit, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <CheckCircleIcon
                    sx={{
                      color: 'primary.main',
                      fontSize: '24px',
                      mt: 0.5,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '18px',
                      lineHeight: 1.6,
                      color: '#2B2B28',
                    }}
                  >
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Column - Can add image later */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }} />
        </Box>
      </Container>
    </Box>
  );
};
