import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export const BelieveInROI_Solution: React.FC = () => {
  const problemItems = [
    'Túl sok idő megy el könyvelővel való egyeztetésre',
    'Csak egy számra lenne szükséged a könyvelőtől, de arra nagyon gyorsan',
    'Megvan a fejedben, a exceledben, hogy hogy áll a céged, de nem tudod ellenőrizni, hogy ez a könyvelésedben is így van-e' /* 'Nem látod a könyvelés szerinti gazdasági és pénzügyi helyzeted', */,
    'Manuálisan kell rendszeresen visszatérő jelentéseket készítened rengeteg munkával',
  ];

  const solutionItems = [
    'A lényegről tudsz egyeztetni a könyvelőddel',
    'A lekönyvelt adataidat eléred bármikor, bárhonnan - 1-2 kattintás és már meg is kaptad a választ',
    'Naprakész, pontos képet kapsz a céged helyzetéről a lekönyvelt adatok alapján - nincs több vakrepülés és kínos meglepetés',
    'Standard formátumú jelentések és elemzések - automatikusan - rengeteg időt és pénzt spórolva neked',
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
            MIRE AD MEGOLDÁST A WISEBOX?
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
            A WiseBox egy döntés-támogató rendszer, ami a könyvelési adataidat láthatóvá és értelmezhetővé teszi
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
          {/* LEFT: Without WiseBox - Problems */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: '12px',
              p: 4,
              height: '100%',
              border: '1px solid',
              borderColor: 'grey.200',
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
              WiseBox nélkül
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

          {/* RIGHT: With WiseBox - Solutions */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: '12px',
              p: 4,
              height: '100%',
              border: '2px solid',
              borderColor: 'success.main',
              boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
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
              WiseBox-szal
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
            Váltás a káoszból a kontrollba – mert nem engedheted meg magadnak, hogy ne lásd mi van a könyvelésedben!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
