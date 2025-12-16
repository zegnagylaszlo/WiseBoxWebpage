import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const BelieveInROI: React.FC = () => {
  const checkItems = [
    { icon: 'check', text: 'le tudnád csökkenteni a könyvelőddel folytatott kommunikációt?' },
    { icon: 'arrow', text: 'egyre szakmaibb rálátásod lenne a könyvelésedre: az eredményedre, áfádra, nyitott vevő / szállítói számláidra, bankjaidra, ... ?' },
    { icon: 'arrow', text: 'egyre kevesebbet kellene kérdezned?' },
    { icon: 'check', text: 'a könyvelési adataidból döntéstámogató információkat kapnál?' },
    { icon: 'check', text: 'minimalizálni tudnád a rendszeres jelentések elkészítésére fordított időt és erőforrást?' },
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
          MEGTÉRÜLÉSEKBEN HISZÜNK
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
          px: { xs: 3, md: 8, lg: 12 },
        }}
      >
        <Box sx={{ maxWidth: '1440px', mx: 'auto' }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            A Wisebox egy döntéstámogató rendszer, ami a könyvelési adataidat láthatóvá és értelmezhetővé teszi
          </Typography>
        </Box>
      </Box>

      {/* Two Column Content */}
      <Box
        sx={{
          px: { xs: 3, md: 8, lg: 12 },
          py: 8,
        }}
      >
        <Box
          sx={{
            maxWidth: '1440px',
            mx: 'auto',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
            alignItems: 'center',
          }}
        >
          {/* Left Column */}
          <Box>
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: '#2B2B28',
                fontSize: { xs: '24px', md: '28px' },
                fontWeight: 700,
              }}
            >
              Mi lenne ha...
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {checkItems.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  {item.icon === 'check' ? (
                    <CheckCircleIcon
                      sx={{
                        color: 'primary.main',
                        fontSize: '24px',
                        mt: 0.2,
                        flexShrink: 0,
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        color: 'primary.main',
                        fontSize: '24px',
                        mt: 0.2,
                        flexShrink: 0,
                        fontWeight: 700,
                      }}
                    >
                      →
                    </Box>
                  )}
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '15px', md: '16px' },
                      lineHeight: 1.6,
                      color: '#2B2B28',
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Button */}
            <Box sx={{ mt: 4 }}>
              <Box
                component="button"
                sx={{
                  bgcolor: '#2B2B28',
                  color: 'white',
                  px: 4,
                  py: 2,
                  fontSize: '16px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '3px',
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: '#1a1a18',
                  },
                }}
              >
                Konzultációt kérek
              </Box>
            </Box>
          </Box>

          {/* Right Column - Image */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <img
              src="/images/budget-finance-tracking.webp"
              alt="Analytics"
              style={{
                width: '85%',
                height: 'auto',
                borderRadius: '4px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
