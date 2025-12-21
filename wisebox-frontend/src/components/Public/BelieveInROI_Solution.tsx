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
    <Box sx={{ bgcolor: 'white' }}>
      {/* Title Section */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            mb: 1,
            color: '#2B2B28',
            fontSize: { xs: '32px', md: '40px' },
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          MIRE AD MEGOLDÁST A WISEBOX
        </Typography>
        <Box
          sx={{
            width: '60px',
            height: '3px',
            bgcolor: 'primary.main',
            mx: 'auto',
          }}
        />
      </Box>

      {/* Full Width Green Box */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 4,
        }}
      >
        <Box sx={{ maxWidth: '1440px', mx: 'auto', px: { xs: 3, md: 8, lg: 12 } }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: 600,
              lineHeight: 1.5,
              textAlign: 'center',
            }}
          >
            A Wisebox egy döntéstámogató rendszer, ami a könyvelési adataidat láthatóvá és értelmezhetővé teszi
          </Typography>
        </Box>
      </Box>

      {/* Before/After Comparison */}
      <Box
        sx={{
          px: { xs: 3, md: 8, lg: 12 },
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
            }}
          >
            {/* LEFT: Without Wisebox - Problems */}
            <Box
              sx={{
                bgcolor: '#f5f5f5',
                borderRadius: '8px',
                p: 4,
                height: '100%',
                border: '2px solid #e0e0e0',
              }}
            >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    color: '#d32f2f',
                    fontSize: { xs: '22px', md: '26px' },
                    fontWeight: 700,
                    textAlign: 'center',
                  }}
                >
                  Wisebox nélkül
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {problemItems.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <CancelIcon
                        sx={{
                          color: '#d32f2f',
                          fontSize: '24px',
                          mt: 0.2,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: '15px', md: '16px' },
                          lineHeight: 1.6,
                          color: '#2B2B28',
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
                bgcolor: '#f0f9f4',
                borderRadius: '8px',
                p: 4,
                height: '100%',
                border: '2px solid #00964B',
                boxShadow: '0 4px 12px rgba(0, 150, 75, 0.15)',
              }}
            >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    color: '#00964B',
                    fontSize: { xs: '22px', md: '26px' },
                    fontWeight: 700,
                    textAlign: 'center',
                  }}
                >
                  Wisebox-szal
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {solutionItems.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <CheckCircleIcon
                        sx={{
                          color: '#00964B',
                          fontSize: '24px',
                          mt: 0.2,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: '15px', md: '16px' },
                          lineHeight: 1.6,
                          color: '#2B2B28',
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
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography
              variant="h5"
              sx={{
                color: '#2B2B28',
                fontSize: { xs: '18px', md: '22px' },
                fontWeight: 600,
                lineHeight: 1.5,
              }}
            >
              Váltás a káoszból a kontrollba – pár kattintással.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
