import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export const BelieveInROI_Solution: React.FC = () => {
  const problemItems = [
    'Túl sok idő megy el könyvelővel való egyeztetésre',
    'Nem látod a könyvelés szerinti gazdasági és pénzügyi helyzeted',
    'Manuálisan kell visszatérő, rendszeres jelentéseket készítened',
  ];

  const solutionItems = [
    'A lényegről tudsz egyeztetni a könyvelőddel',
    'A könyvelési adataid pár kattintásra elérhetőek, bármikor, bárhonnan',
    'Automatikus, standard formátumú jelentések és elemzések',
  ];

  return (
    <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: '#FFFFFF' }}>
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
            MIRE AD MEGOLDÁST A WISEBOX
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: 'text.primary',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            A Wisebox egy döntéstámogató rendszer, ami a könyvelési adataidat láthatóvá és értelmezhetővé teszi
          </Typography>
        </Box>

        {/* Before/After Comparison */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            mb: 6,
          }}
        >
          {/* LEFT: Without Wisebox - Problems */}
          <Box
            sx={{
              bgcolor: '#FEF5F5',
              borderRadius: '12px',
              p: 4,
              height: '100%',
              border: '1px solid #FFCDD2',
              boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                color: '#D32F2F',
                textAlign: 'center',
              }}
            >
              Wisebox nélkül
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {problemItems.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <CancelIcon
                    sx={{
                      color: '#D32F2F',
                      fontSize: '28px',
                      mt: 0.2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.7,
                      color: 'text.primary',
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* RIGHT: With Wisebox - Solutions */}
          <Box
            sx={{
              bgcolor: '#F1F8F5',
              borderRadius: '12px',
              p: 4,
              height: '100%',
              border: '2px solid',
              borderColor: 'success.main',
              boxShadow: '0px 4px 16px rgba(122, 200, 125, 0.15)',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                color: 'success.main',
                textAlign: 'center',
              }}
            >
              Wisebox-szal
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {solutionItems.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <CheckCircleIcon
                    sx={{
                      color: 'success.main',
                      fontSize: '28px',
                      mt: 0.2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.7,
                      color: 'text.primary',
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Bottom CTA Text */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              color: 'text.primary',
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            Váltás a káoszból a kontrollba – pár kattintással.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
